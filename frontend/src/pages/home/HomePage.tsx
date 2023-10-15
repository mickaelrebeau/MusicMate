import { SongsCard } from '@/src/components/cards/SongsCard';
import { DailyMixCard } from '@/src/components/cards/dailyMixCard';
import { musicGenre } from '@/src/utils/genres';
import { CLIENT_ID, CLIENT_SECRET } from '@/src/utils/spotify';
import { ListPlus, Shuffle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Home() {
  const token = localStorage.getItem('token');
  const playlistsNumber = 5;
  const url =
    'https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg';
  const [songs, setSongs] = useState<
    {
      id: string;
      name: string;
      album: { images: { url: string }[] };
      artists: { name: string }[];
      external_urls: { spotify: string };
    }[]
    >([]);
  
  const [randomSongIndex, setRandomSongIndex] = useState(0);

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

  async function searchSong() {
    if (!token) {
      console.error('Token not available. Please wait for authentication.');
      return;
    }

    const searchParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const randomGenre =
      musicGenre[Math.floor(Math.random() * musicGenre.length)].toLowerCase();

    await fetch(
      `https://api.spotify.com/v1/search?q=genre%3A${randomGenre}&type=track&limit=50`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.tracks.items);
        const randomIndex = Math.floor(
          Math.random() * data.tracks.items.length
        );
        setRandomSongIndex(randomIndex);
      });
  }

  return (
    <section className="px-10 pt-10 pb-20 mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Listen Now</h2>
        <p className="text-slate-500">
          Listen to new music from all over the world. Click the shuffle button
          to listen to a random song.
        </p>
        <button
          onClick={searchSong}
          className="w-[200px] flex items-center justify-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
          <Shuffle size={20} />
          Shuffle Playback
        </button>
        <div className="flex flex-col gap-2">
          {randomSongIndex !== null && songs.length > 0 && (
            <SongsCard
              key={songs[randomSongIndex].id}
              url={songs[randomSongIndex].album.images[0].url}
              songName={songs[randomSongIndex].name}
              artists={songs[randomSongIndex].artists}
              href={songs[randomSongIndex].external_urls.spotify}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Made for You</h2>
        <p className="text-slate-500">
          Your personal playlists. Updated daily.
        </p>
        <div className="mt-2 max-w-[1220px] grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
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
