/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SongsCard } from '@/src/components/SongsCard';
import { Search } from 'lucide-react';
import { useState } from 'react';

export function SongsPage() {
  const token = localStorage.getItem('token');
  const [search, setSearch] = useState('');
  const [songs, setSongs] = useState<
    {
      id: string;
      name: string;
      artists: { name: string }[];
      external_urls: { spotify: string }[];
    }[]
  >([]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Search for', search);
    if (search) {
      searchSong();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  async function searchSong() {
    const searchParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const songId = await fetch(
      `https://api.spotify.com/v1/search?q=${search}&type=track`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.tracks.items);
        return data.tracks.items;
      });

    songId.forEach(async (element: { id: string }) => {
      await fetch(
        `https://api.spotify.com/v1/tracks/${element.id}`,
        searchParams
      )
        .then((response) => response.json())
        .then((data) => {
          setSongs((prev) => [...prev, data]);
        });
    });
}
console.log(songs);

  return (
    <section className="px-6 py-10 mx-auto flex flex-col gap-10">
      <p className="text-center text-xl text-slate-400">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-400">
          Search{' '}
        </span>
        for your favorite song.
      </p>
      <div className="flex items-stretch justify-center">
        <form onSubmit={onSubmit} className="flex gap-3">
          <input
            type="search"
            className="relative m-0 py-3 px-5 block w-[400px] rounded-xl border-2 border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-2 focus:border-purple-500 focus:outline dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-slate-5400 dark:focus:border-primary"
            placeholder="Search for an Artist"
            aria-label="Search"
            aria-describedby="button-addon2"
            value={search}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="px-3 border-2 rounded-lg dark:border-neutral-600">
            <Search size={30} />
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-10">
        {songs.map((song) => (
          <SongsCard
            songName={song.name}
            artists={song.artists}
            // @ts-ignore
            href={song.external_urls['spotify']}
          />
        ))}
      </div>
    </section>
  );
}
