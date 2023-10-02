import { Dispatch, SetStateAction } from "react";
import { User } from "../pages/profile/ProfilePage";
import { UseFormRegister } from "react-hook-form";

const musicGenre = ["Rock", "Pop", "Jazz", "Classical", "Blues", "Country", "Metal", "Hip-Hop", "R&B", "Dance/Electro", "Reggae", "Folk", "World", "Dancehall/Zouk", "Afro", "Indie", "K-pop", "Punk", "Soul", "Rap"];

type Props = {
    register: UseFormRegister<User>,
    user: User, 
    setUser: Dispatch<SetStateAction<User>>
}
export function MusicGender({
    register, user, setUser
}: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.currentTarget;
        setUser((prevUser) => {
            if (checked) {
              return {
                ...prevUser,
                genres: [...prevUser.genres, name],
              }; 
            } else {
              return {
                ...prevUser,
                genres: prevUser.genres.filter((genre) => genre !== name),
              };
            }
        });
        console.log(user.genres);
    }

    return (
        <div className="mt-8 flex flex-col items-center">
            <p className="text-3xl font-semibold mb-8">What genre of music do you like ?</p>

            <div className="mt-8 max-w-[1220px] grid grid-cols-4 gap-4">
                {musicGenre.map((genre) => (
                    <div key={genre} className="flex items-center gap-1">
                        <input
                            {...register("genres", {onChange: handleChange})}
                            type="checkbox"
                            id={genre}
                            name={genre}
                            checked={user.genres.includes(genre)}
                            onChange={handleChange}
                        />
                        <label htmlFor={genre}>{genre}</label>
                    </div>
                ))}
            </div>
        </div>
    )
} 