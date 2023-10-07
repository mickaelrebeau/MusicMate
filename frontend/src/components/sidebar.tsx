import {
  Library,
  ListMusic,
  LucideIcon,
  Mic2,
  Music2,
  PlayCircle,
  Search,
} from 'lucide-react';
import { cn } from '../libs/tailwind';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <>
      <div className="flex flex-col px-3 py-6 shadow w-72 border-r border-gray-700">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Discover</h2>
            <MenuItem link="/home" icon={PlayCircle} text="Listen Now" />
            <MenuItem link="/search" icon={Search} text="Search" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Library</h2>
            <MenuItem link="/playlists" icon={ListMusic} text="Playlists" />
            <MenuItem link="/songs" icon={Music2} text="Songs" />
            <MenuItem link="/artists" icon={Mic2} text="Artists" />
            <MenuItem link="/albums" icon={Library} text="Albums" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Playlists</h2>
            <div className="h-[150px] 2xl:h-full overflow-auto">
              <MenuItem
                link="/playlists/recently-added"
                icon={ListMusic}
                text="Recently Added"
              />
              <MenuItem
                link="/playlists/recently-played"
                icon={ListMusic}
                text="Recently Played"
              />
              <MenuItem
                link="/playlists/my-playlist-1"
                icon={ListMusic}
                text="My Playlist 1"
              />
              <MenuItem
                link="/playlists/my-playlist-2"
                icon={ListMusic}
                text="My Playlist 2"
              />
              <MenuItem
                link="/playlists/my-playlist-3"
                icon={ListMusic}
                text="My Playlist 3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type MenuItemProps = {
  icon: LucideIcon;
  text: string;
  className?: string;
  link: string;
};

function MenuItem({ icon: Icon, text, className, link }: MenuItemProps) {
  return (
    <NavLink
      to={link}
      end
      className={({ isActive }) =>
        cn(
          'flex items-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded',
          className,
          { 'bg-purple-500': isActive }
        )
      }>
      <Icon size={20} />
      <span>{text}</span>
    </NavLink>
  );
}
