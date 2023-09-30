import { Dispatch, SetStateAction } from "react";
import { User } from "../pages/profile/ProfilePage";

const musicGenre = ["Rock", "Pop", "Jazz", "Classical", "Blues", "Country", "Metal", "Hip-Hop", "R&B", "Dance/Electro", "Reggae", "Folk", "World", "Dancehall/Zouk", "Afro", "Indie", "K-pop", "Punk", "Soul", "Rap"];

type Props = {
    user: User, 
    setUser: Dispatch<SetStateAction<User>>
}
export function MusicGender({
    user, setUser
}: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            setUser({
                ...user,
                genres: [...user.genres, e.currentTarget.name]
            })
            return;
        }

        setUser({
            ...user,
            genres: user.genres.filter((genre) => genre !== e.currentTarget.name)
        })
    }

    return (
        <div className="mt-8 flex flex-col items-center">
            <p className="text-3xl font-semibold mb-8">What genre of music do you like ?</p>

            <div className="mt-8 max-w-[1220px] grid grid-cols-4 gap-4">
                {musicGenre.map((genre) => (
                    <div key={genre} className="flex items-center gap-1">
                        <input type="checkbox" id={genre} name={genre} checked={user.genres.includes(genre)} onChange={handleChange} />
                        <label htmlFor={genre}>{genre}</label>
                    </div>
                ))}
            </div>
        </div>
    )
} 