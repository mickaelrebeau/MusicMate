import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-slate-600">
      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-400">
        MusicMate
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://streamlabs.com/mike_dreeman/tip"
          className="hover:text-purple-400">
          Support Me
        </a>
        <button className="cursor-pointer hover:text-purple-400">
          <Menu size={30} />
        </button>
      </div>
    </header>
  );
}
