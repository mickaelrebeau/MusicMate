/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react';
import { User } from '../pages/auth/SignUpPage';
import { UseFormRegister } from 'react-hook-form';
import { musicGenre } from '../utils/genres';

type Props = {
   register: UseFormRegister<User>;
   user: User;
   setUser: Dispatch<SetStateAction<User>>;
   errors: any;
};
export function MusicGender({ register, user, setUser, errors }: Props) {
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.currentTarget;
      setUser((prevUser) => {
         if (checked) {
            return {
               ...prevUser,
               genres: [...prevUser.genres, value],
            };
         } else {
            return {
               ...prevUser,
               genres: prevUser.genres.filter((genre) => genre !== value),
            };
         }
      });
   };

   return (
      <div className="mt-8 flex flex-col items-center">
         <p className="text-3xl font-semibold mb-8">
            What genre of music do you like ?
         </p>

         <div className="mt-8 max-w-[1220px] grid grid-cols-4 gap-4">
            {musicGenre.map((genre) => (
               <div
                  key={genre}
                  className="w-[200px] h-[50px] flex justify-center items-center gap-1">
                  {errors.genres?.message}
                  <input
                     {...register('genres')}
                     type="checkbox"
                     id={genre}
                     value={genre}
                     onChange={handleChange}
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
   );
}
