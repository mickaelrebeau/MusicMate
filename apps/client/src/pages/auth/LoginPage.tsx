import { api } from '@/src/libs/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { MoveLeft } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Must be 8 or more characters long' })
    .refine((value) => /[A-Z]/.test(value), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine((value) => /[0-9]/.test(value), {
      message: 'Password must contain at least one digit',
    })
    .refine((value) => /[!@#$%^&*]/.test(value), {
      message:
        'Password must contain at least one special character (!@#$%^&*)',
    }),
});

export type UserLogin = z.infer<typeof schema>;

const defaultconfig = {
  email: '',
  password: '',
};
export function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: defaultconfig,
  });

  const [login, setLogin] = useState<UserLogin>({
    email: '',
    password: '',
  });

  const onSubmit: SubmitHandler<UserLogin> = async (_data, e) => {
    e?.preventDefault();

    const response = await api.post('auth/signin', login);

    if (response.status === 201) {
      localStorage.setItem('access_token', response.data.datas.access_token);
      localStorage.setItem('userId', response.data.datas.userId);
      navigate("/home");
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-[900px] ml-40 flex gap-2 text-start font-semibold">
        <p className="flex items-center gap-2 text-slate-500 hover:text-indigo-500">
          <MoveLeft className="cursor-pointer" />
          <NavLink to={'/'}>Back to start</NavLink>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-3xl font-semibold mb-8">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[400px] flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              {...register('email')}
              className="border rounded p-2 border-slate-500"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <input
              {...register('password')}
              className="border rounded p-2 border-slate-500"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
          </div>

          {(errors.password, errors.email) && (
            <span className="text-red-500 text-left">
              Email or password incorrect
            </span>
          )}

          <button
            className="px-10 py-1 mt-4 rounded text-2xl font-semibold hover:bg-gradient-to-r from-indigo-600 to-purple-400 hover:shadow-2xl hover:shadow-indigo-500/50"
            type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
