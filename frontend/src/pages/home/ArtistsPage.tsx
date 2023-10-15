import { ArtistsCard } from '@/src/components/cards/ArtistsCard';
import { Search } from 'lucide-react';
import { useState } from 'react';

export function ArtistsPage() {
  const token = localStorage.getItem('token');
  const [search, setSearch] = useState('');
  const [albums, setAlbums] = useState<
    {
      id: string;
      images: { url: string }[];
      name: string;
      artists: { name: string }[];
      total_tracks: number;
      external_urls: { spotify: string };
    }[]
  >([]);
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search) {
      searchArtist();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  async function searchArtist() {
    const searchParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const artistId = await fetch(
      `https://api.spotify.com/v1/search?q=${search}&type=artist`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US`,
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data.items);
      });
  }

  return (
    <section className="p-10 mx-auto flex flex-col gap-10">
      <p className="text-center text-xl text-slate-400">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-400">
          Search{' '}
        </span>
        an artist name and find their albums.
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
      <div className="grid grid-cols-3 xl:grid-cols-4 min-[1800px]:grid-cols-5 gap-6">
        {albums.map((album) => (
          <ArtistsCard
            key={album.id}
            url={album.images[0].url}
            albumName={album.name}
            artistName={album.artists[0].name}
            totalTracks={album.total_tracks}
            href={album.external_urls.spotify}
          />
        ))}
      </div>
    </section>
  );
}
