export function ArtistsCard({
  url,
  albumName,
  artistName,
  totalTracks,
  href,
}: {
  url: string;
  albumName: string;
  artistName: string;
  totalTracks: number;
  href: string;
}) {
  return (
    <div className="max-w-[240px] p-4 flex flex-col items-center gap-2 border border-slate-600 shadow-xl shadow-purple-500/20 rounded-lg">
      <img
        className="w-[200px] h-[200px] object-cover rounded-lg"
        src={url}
        alt=""
      />
      <div className="p-2 w-full">
        <h2 className="text-left font-bold">{albumName}</h2>
        <p className="text-left text-slate-500">{artistName}</p>
        <p className="text-left text-slate-500">{totalTracks} songs.</p>
        <a href={href} target="_blank" className="pt-8 hover:text-purple-500">
          View on Spotify
        </a>
      </div>
    </div>
  );
}
