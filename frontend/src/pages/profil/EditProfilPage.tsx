import { authorizationProfil, updateProfil } from '@/src/services/user';
import { musicGenre } from '@/src/utils/genres';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as z from 'zod';

const schema = z.object({
  pseudo: z
    .string()
    .min(3, { message: 'Must be 3 or more characters long' })
    .max(20, { message: 'Must be 20 or fewer characters long' })
    .refine((value) => /^[a-zA-Z0-9]+$/.test(value), {
      message: 'Pseudo can only contain letters and numbers',
    }),
  email: z.string().email({ message: 'Invalid email address' }),
  genres: z.array(z.string()),
});

type User = z.infer<typeof schema>;

export function EditProfil() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [user, setUser] = useState<User>({
    pseudo: '',
    email: '',
    genres: [],
  });

  useEffect(() => {
    authorizationProfil().then((response) => {
      setUser({
        pseudo: response.pseudo,
        email: response.email,
        genres: response.genres,
      });
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await updateProfil(user, userId as string);
      navigate('/profil');
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  const handleChangeGenre = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.currentTarget;
    if (checked) {
      setUser((prevUser) => {
        return {
          ...prevUser,
          genres: [...prevUser.genres, value],
        };
      });
    } else {
      setUser((prevUser) => {
        return {
          ...prevUser,
          genres: prevUser.genres.filter((genre) => genre !== value),
        };
      });
    }
    console.log(user.genres);
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="px-10 pt-10 pb-20 mx-auto flex flex-col items-center gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">Profil</h2>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="pseudo">Pseudo</label>
          <input
            id="pseudo"
            name='pseudo'
            className="rounded p-2"
            type="text"
            onChange={handleChange}
            defaultValue={user.pseudo}
          />
        </div>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name='email'
            className="rounded p-2"
            type="email"
            onChange={handleChange}
            defaultValue={user.email}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <h2 className="text-2xl text-center">Your favorite music genre</h2>
        <div className="mt-8 max-w-[1220px] grid grid-cols-4 gap-4">
          {musicGenre.map((genre) => (
            <div
              key={genre}
              className="w-[200px] h-[50px] flex justify-center items-center gap-1">
              <input
                type="checkbox"
                id={genre}
                value={genre}
                onChange={handleChangeGenre}
                className="hidden"
              />
              <label
                htmlFor={genre}
                className={`w-[200px] text-center font-semibold cursor-pointer py-1 rounded hover:bg-purple-950 ${
                  user.genres.includes(genre)
                    ? 'text-white bg-purple-800'
                    : 'text-slate-400'
                }`}>
                {genre}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <NavLink
          to="/profil"
          className="w-96 flex items-center justify-center gap-2 mt-5 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
          Cancel
        </NavLink>
        <button className="w-96 flex items-center justify-center gap-2 mt-5 p-2 font-semibold cursor-pointer hover:bg-gradient-to-r from-indigo-600 to-purple-400 rounded">
          Edit
        </button>
      </div>
    </form>
  );
}
