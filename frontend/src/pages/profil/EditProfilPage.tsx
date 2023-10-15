import { musicGenre } from '@/src/utils/genres';
import { NavLink } from 'react-router-dom';

export function EditProfil() {
  return (
    <form className="px-10 pt-10 pb-20 mx-auto flex flex-col items-center gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">Profil</h2>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="pseudo">Pseudo</label>
          <input id="pseudo" className="rounded p-2" type="text" />
        </div>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input id="email" className="rounded p-2" type="email" />
        </div>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input id="password" className="rounded p-2" type="password" />
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
                className="hidden"
              />
              <label
                htmlFor={genre}
                className="w-[200px] text-center font-semibold cursor-pointer py-1 rounded hover:bg-purple-950">
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
