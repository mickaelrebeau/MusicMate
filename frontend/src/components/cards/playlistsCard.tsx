import { SearchSong } from "@/src/services/fetch";
import { ListPlus } from "lucide-react";
import { useState } from "react";

interface Playlist {
  name: string;
  songs: {
    id: string;
    name: string;
    album: { images: { url: string }[] };
    artists: { name: string }[];
    external_urls: { spotify: string };
  }[];
}

export function PlaylistCard() {
    const token = localStorage.getItem('token');
    const playlistsNumber = 5;
    const url =
      'https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg';
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    const user = {
      genres: ['rock', 'pop', 'jazz'],
    }

    async function hanfleClickPlayslists() {
      if (!token) {
        console.error('Token not available. Please wait for authentication.');
        return;
      }

      for (let i = 0; i < playlistsNumber; i++) {
        const randomGenre =
          user.genres[
            Math.floor(Math.random() * user.genres.length)
          ].toLowerCase();

        const response = await SearchSong(token, randomGenre);
        const data = await response.json();

        const playlistSongs: {
          id: string;
          name: string;
          album: { images: { url: string }[] };
          artists: { name: string }[];
          external_urls: { spotify: string };
        }[] = [];
        while (playlistSongs.length < 20) {
          const randomIndex = Math.floor(
            Math.random() * data.tracks.items.length
          );
          const song = data.tracks.items[randomIndex];
          if (!playlistSongs.find((s) => s.id === song.id)) {
            playlistSongs.push(song);
          }
        }

        playlists.push({
          name: `Daily test ${i + 1}`,
          songs: playlistSongs,
        });
      }

      setPlaylists(playlists);
    }

    return (
      <section className="p-4">
        <button
          onClick={hanfleClickPlayslists}
          className="w-[200px] flex items-center justify-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
          <ListPlus size={20} />
          Generate playlists
        </button>
        <div className="mt-2 max-w-[1220px] grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="w-[200px] shadow-2xl shadow-purple-500/30 rounded p-2 transition transform translate-y-3 hover:translate-y-0">
              <div className="group relative">
                <img className="mx-auto w-44 block rounded" src={url} alt="" />
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                  {/* Add buttons for actions like Play and Heart */}
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-lg font-medium">{playlist.name}</h3>
                <p className="text-sm text-slate-500">
                  Name of some artist in the playlist
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}