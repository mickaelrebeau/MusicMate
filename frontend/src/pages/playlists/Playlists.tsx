import { DailyMixCard } from '@/src/components/dailyMixCard';
import { ModalNewPlaylist } from '@/src/components/modals/ModalNewPlaylist';
import { MoreHorizontal } from 'lucide-react';

export function Playlists() {
  const playlistsNumber = 10;
  const url =
    'https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg';

  return (
    <section className="px-6 py-10 mx-auto flex flex-col">
      <div className="flex items-center justify-between gap-10">
        <h2 className="text-xl font-bold">Playlists</h2>
        <ModalNewPlaylist />
      </div>
      <div className="mt-6 grid grid-cols-3 xl:grid-cols-4 min-[1800px]:grid-cols-5 gap-6">
        {[...Array(playlistsNumber)].map((_, i) => (
          <DailyMixCard
            key={i}
            playlistName={'My Playlist ' + (i + 1)}
            imageUrl={url}
            Icon={MoreHorizontal}
            size={30}
          />
        ))}
      </div>
    </section>
  );
}
