export function SongsCard({
      songName,
      artists,
      href
}: {
      songName: string;
      artists: { name: string }[];
      href: string;
}) {
    return (
      <div className="w-full p-4 flex items-end justify-between gap-2 border rounded-lg">
      <div className="flex flex-col gap-2">
        <h2 className="text-left font-bold">{songName}</h2>
        <p className="text-left text-slate-500">
          Artists: {artists.map((artist, index) => (
            <span key={index}>{artist.name}{index !== artists.length - 1 ? ', ' : ''}</span>
          ))}
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <a className="hover:text-purple-500" href={href}>View on Spotify</a>
      </div>
    </div>
    );
}