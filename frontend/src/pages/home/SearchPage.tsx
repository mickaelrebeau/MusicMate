import { musicGenre } from '@/src/utils/genres';
import { PlayCircle, Search } from 'lucide-react';
import { useState } from 'react';

export function SearchPage() {
  const [search, setSearch] = useState('');
  const url =
    'https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg';

  const filteredCategories = musicGenre.filter((category) =>
    category.toLowerCase().includes(search.toLowerCase().trim())
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <section className="px-6 py-10 mx-auto flex flex-col gap-10">
      <p className="text-center text-xl text-slate-400">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-400">
          Search{' '}
        </span>
        for your favorite song categrory.
      </p>
      <div className="flex items-stretch justify-center">
        <div className="relative">
          <Search
            className="absolute left-2 top-1/2 -translate-y-1/2"
            size={30}
          />
          <input
            type="search"
            className="relative m-0 p-3 pl-11 block w-[400px] rounded-xl border-2 border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-2 focus:border-purple-500 focus:outline dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-slate-5400 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            value={search}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-4 min-[1800px]:grid-cols-5 gap-4">
        {filteredCategories.map((category) => (
          <div
            key={category}
            className="flex flex-col gap-4 w-64 2xl:w-72 relative transition group overflow-hidden rounded-lg">
            <img
              className="group-hover:scale-110 transition rounded-lg"
              src={url}
              alt=""
            />
            <div className="absolute w-64 h-64 2xl:w-72 2xl:h-72 flex flex-col items-center justify-center gap-2 text-center bg-black bg-opacity-60 hover:bg-opacity-0 hover:bg-transparent cursor-pointer">
              <h2 className="text-2xl font-bold">{category}</h2>
              <button className="flex items-center justify-center gap-2 p-2 font-semibold cursor-pointer hover:text-purple-700 rounded">
                <PlayCircle size={50} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
