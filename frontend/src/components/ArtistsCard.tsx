export function ArtistsCard({
  url,
  albumName,
  artistName,
}: {
  url: string;
  albumName: string;
  artistName: string;
}) {
  return (
    <div className="max-w-[240px] p-4 flex flex-col items-center gap-2 border rounded-lg">
      <img
        className="w-[200px] h-[200px] object-cover rounded-lg"
        src={url}
        alt=""
      />
      <div className="p-2 w-full">
        <h2 className="text-left font-bold">{albumName}</h2>
        <p className="text-left text-slate-500">{artistName}</p>
      </div>
    </div>
  );
}
