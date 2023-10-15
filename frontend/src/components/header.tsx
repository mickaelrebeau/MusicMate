import { LogOut, UserCircle } from 'lucide-react';
import { cn } from '../libs/tailwind';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-slate-600">
      <NavLink
        to="/home"
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-400 hover:bg-gradient-to-r hover:from-indigo-800 hover:to-purple-600">
        MusicMate
      </NavLink>
      <div className="flex items-center gap-4">
        <a
          href="https://streamlabs.com/mike_dreeman/tip"
          className="hover:text-purple-400">
          Support Me
        </a>
        <NavLink
          to="/profil"
          end
          className={({ isActive }) =>
            cn(
              'hover:text-purple-400 hover:border-purple-400 flex items-center gap-2 p-3 border border-slate-600 rounded',
              { 'bg-purple-500': isActive }
            )
          }>
          Profil
          <UserCircle size={20} />
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-2 p-3 border border-slate-600 rounded hover:text-purple-400 hover:border-purple-400">
          Log Out
          <LogOut size={20} />
        </NavLink>
      </div>
    </header>
  );
}
