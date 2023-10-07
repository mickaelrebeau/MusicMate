import { DailyMixCard } from '@/src/components/dailyMixCard';
import { ListPlus, Shuffle } from 'lucide-react';

export function Home() {
  const playlistsNumber = 5;
  const url =
    'https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg';

  return (
    <section className="p-10 mx-auto h-screen flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Listen Now</h2>
        <p className="text-slate-500">
          Listen to new music from all over the world. Click the shuffle button
          to listen to a random song.
        </p>
        <button className="w-[200px] flex items-center justify-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
          <Shuffle size={20} />
          Shuffle Playback
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Made for You</h2>
        <p className="text-slate-500">
          Your personal playlists. Updated daily.
        </p>
        <div className="mt-6 flex gap-6">
          {Array.from({ length: playlistsNumber }).map((_, i) => (
           <DailyMixCard
              key={i}
              playlistName={'Daily Playlist ' + (i + 1)}
              imageUrl={url}
              Icon={ListPlus}
              size={30}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
