import { Heart, LucideIcon, Play } from 'lucide-react';

export function DailyMixCard({
  playlistName,
  imageUrl,
  Icon,
  size,
}: {
  playlistName: string;
  imageUrl: string;
  Icon: LucideIcon;
  size: string | number | undefined;
}) {
  return (
    <div className="w-[200px] shadow-2xl shadow-purple-500/30 rounded p-2 transition transform translate-y-3 hover:translate-y-0">
      <div className="group relative">
        <img className="mx-auto w-44 block rounded" src={imageUrl} alt="" />
        <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
          <button className="hover:scale-110 opacity-0 transform translate-y-3 hover:text-purple-600 group-hover:translate-y-0 group-hover:opacity-100 transition">
            <Heart size={30} />
          </button>

          <button className="hover:scale-110 opacity-0 transform translate-y-3 hover:text-purple-600 group-hover:translate-y-0 group-hover:opacity-100 transition">
            <Play size={40} />
          </button>

          <button className="hover:scale-110 opacity-0 transform translate-y-3 hover:text-purple-600 group-hover:translate-y-0 group-hover:opacity-100 transition">
            <Icon size={size} />
          </button>
        </div>
      </div>
      <div className="p-2">
        <h3 className="text-lg font-medium">{playlistName}</h3>
        <p className="text-sm text-slate-500">
          Name of some artist in the playlist
        </p>
      </div>
    </div>
  );
}
