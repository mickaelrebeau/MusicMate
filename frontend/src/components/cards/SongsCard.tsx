export function SongsCard({
  url,
  songName,
  artists,
  href,
}: {
  url: string;
  songName: string;
  artists: { name: string }[];
  href: string;
}) {
  return (
    <div className="w-[900px] p-4 flex items-end justify-between gap-2 border border-slate-600 rounded-lg">
      <div className="flex items-center gap-3">
        <img
          className="w-[100px] h-[100px] object-cover rounded-lg"
          src={url}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-left font-bold">{songName}</h2>
          <p className="max-w-[300px] text-left text-slate-500">
            Artists:{' '}
            {artists.map((artist, index) => (
              <span key={index}>
                {artist.name}
                {index !== artists.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <a className="hover:text-purple-500" href={href}>
          View on Spotify
        </a>
      </div>
    </div>
  );
}
