import { DailyMixCard } from '@/src/components/dailyMixCard';
import { CLIENT_ID, CLIENT_SECRET } from '@/src/utils/spotify';
import { ListPlus, Shuffle } from 'lucide-react';
import { useEffect } from 'react';

export function Home() {
  const playlistsNumber = 5;
  const url =
    'https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg';

  useEffect(() => {
    const authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };
    fetch('https://accounts.spotify.com/api/token', authParams)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('token', data.access_token);
      });
  }, []);

  return (
    <section className="px-10 pt-10 pb-20 mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-2">
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
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Made for You</h2>
        <p className="text-slate-500">
          Your personal playlists. Updated daily.
        </p>
        <div className="mt-2 grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
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
