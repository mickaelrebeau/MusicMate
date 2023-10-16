import { authorizationProfil } from '@/src/services/user';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Profil() {
  const [user, setUser] = useState({
    pseudo: '',
    email: '',
    genres: [],
  })

  useEffect(() => {
    authorizationProfil()
    .then((response) => {
      setUser({
        pseudo: response.pseudo,
        email: response.email,
        genres: response.genres
      })
    })
  }, [])

  return (
    <section className="px-10 pt-10 pb-20 mx-auto flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-center font-bold">Profil</h2>
        <p className="py-2 px-10 border border-slate-600 rounded shadow shadow-purple-500/30">
          {user.pseudo}
        </p>
        <p className="py-2 px-10 border border-slate-600 rounded shadow shadow-purple-500/30">
          {user.email}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-center font-bold">Genres</h2>
        <div className="grid grid-cols-4 gap-2 ">
          {user.genres.map((genre, index) => (
            <p
              key={index}
              className="p-2 text-center border border-slate-600 rounded shadow shadow-purple-500/30">
              {genre}
            </p>
          ))}
        </div>
      </div>
      <NavLink
        to="/profil/edit"
        className="w-96 flex items-center justify-center gap-2 mt-5 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded hover:shadow hover:shadow-purple-500/30">
        Edit
      </NavLink>
    </section>
  );
}
