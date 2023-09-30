import { Dispatch, SetStateAction } from "react";
import { User } from "../pages/profile/ProfilePage";
import { UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<User>,
    user: User, 
    setUser: Dispatch<SetStateAction<User>>
}

export function SignUp({
    register,
    user,
    setUser
}: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-center font-semibold mb-8">Sign Up</h1>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <label className="font-semibold mb-1" htmlFor="pseudo">Peudo</label>
                    <input {...register("pseudo")} className="rounded p-2" id="pseudo" type="text" name="pseudo" defaultValue={user.pseudo} placeholder="Pseudo" onChange={handleChange}/>
                </div>
                <div className="w-[400px] flex flex-col">
                    <label className="font-semibold mb-1" htmlFor="email">Email</label>
                    <input {...register("email")} className="rounded p-2" id="email" type="email" name="email" defaultValue={user.email} placeholder="Email" onChange={handleChange} />
                </div> 
            </div>
        </div>
    )
}