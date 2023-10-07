/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react';
import { User } from '../pages/auth/SignUpPage';
import { UseFormRegister } from 'react-hook-form';

type Props = {
   register: UseFormRegister<User>;
   user: User;
   setUser: Dispatch<SetStateAction<User>>;
   errors: any;
};

export function FormSignUp({ register, user, setUser, errors }: Props) {
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({
         ...user,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <div className="flex flex-col gap-4">
         <h1 className="text-3xl text-center font-semibold mb-8">Sign Up</h1>
         <div className="w-[400px] flex flex-col gap-5">
            <div className="flex flex-col gap-2">
               <label className="font-semibold mb-1" htmlFor="pseudo">
                  Pseudo
               </label>
               {errors.pseudo && (
                  <span className="text-red-500 text-right">
                     {errors.pseudo.message}
                  </span>
               )}
               <input
                  {...register('pseudo')}
                  className="rounded p-2"
                  id="pseudo"
                  type="text"
                  name="pseudo"
                  defaultValue={user.pseudo}
                  placeholder="Pseudo"
                  onChange={handleChange}
               />
            </div>

            <div className="flex flex-col gap-2">
               <label className="font-semibold mb-1" htmlFor="email">
                  Email
               </label>
               {errors.email && (
                  <span className="text-red-500 text-right">
                     {errors.email.message}
                  </span>
               )}
               <input
                  {...register('email')}
                  className="rounded p-2"
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  placeholder="Email"
                  onChange={handleChange}
               />
            </div>

            <div className="flex flex-col gap-2">
               <label className="font-semibold mb-1" htmlFor="password">
                  Password
               </label>
               {errors.password && (
                  <span className="text-red-500 text-right">
                     {errors.password.message}
                  </span>
               )}
               <input
                  {...register('password')}
                  className="rounded p-2"
                  id="password"
                  type="password"
                  name="password"
                  defaultValue={user.password}
                  placeholder="Password"
                  onChange={handleChange}
               />
            </div>
         </div>
      </div>
   );
}
