const musicGenre = ["Rock", "Pop", "Jazz", "Classical", "Blues", "Country", "Metal", "Hip-Hop", "R&B", "Dance/Electro", "Reggae", "Folk", "World", "Dancehall/Zouk", "Afro", "Indie", "K-pop", "Punk", "Soul", "Rap"];
export function MusicGender() {
    return (
        <div className="mt-8 flex flex-col items-center">
            <p className="text-3xl font-semibold mb-8">What genre of music do you like ?</p>

            <div className="mt-8 max-w-[1220px] grid grid-cols-4 gap-4">
                {musicGenre.map((genre) => (
                    <div key={genre} className="flex items-center gap-1">
                        <input type="checkbox" name="genre" id={genre} />
                        <label htmlFor={genre}>{genre}</label>
                    </div>
                ))}
            </div>
        </div>
    )
} 