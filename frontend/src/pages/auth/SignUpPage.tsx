import { FormSignUp } from '@/src/components/forms/formSignup';
import { MusicGender } from '@/src/components/forms/musicGender';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { api } from "@/src/libs/axios";

const schema = z.object({
  pseudo: z
    .string()
    .min(3, { message: 'Must be 3 or more characters long' })
    .max(20, { message: 'Must be 20 or fewer characters long' })
    .refine((value) => /^[a-zA-Z0-9]+$/.test(value), {
      message: 'Pseudo can only contain letters and numbers',
    }),
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
  genres: z.array(z.string()),
});

export type User = z.infer<typeof schema>;

const defaultconfig = {
  pseudo: '',
  email: '',
  password: '',
  genres: [],
};

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: defaultconfig,
  });

  const [user, setUser] = useState<User>({
    pseudo: '',
    email: '',
    password: '',
    genres: [],
  });

  const steps = [
    <FormSignUp {...{ register, user, setUser, errors }} />,
    <MusicGender {...{ register, user, setUser, errors }} />,
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const isFinished = currentStep === steps.length - 1;
  const animationRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const onSubmit: SubmitHandler<User> = async (_data, e) => {
    e?.preventDefault();

    const response = await api.post("auth/signup", user)

    if (response.status === 201) {
        navigate("/login");
    }
  };

  useEffect(() => {
    animationRef.current?.classList.add('animate');
  }, []);

  return (
    <section
      ref={animationRef}
      className="p-20 h-screen flex flex-col items-center justify-center animate-fadeIn">
      <div className="w-[900px] ml-40 flex gap-2 text-start font-semibold">
        <p className="flex items-center gap-2 text-slate-500 hover:text-indigo-500">
          <MoveLeft className="cursor-pointer" />
          <NavLink to={'/'}>Back to start</NavLink>
        </p>
      </div>
      <div className="h-16 flex text-center text-xl font-semibold text-slate-500">
        <p>
          Step {currentStep + 1} Of {steps.length}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {steps[currentStep]}

        <div className="mt-8 flex justify-center">
          {currentStep > 0 && (
            <button
              className="px-10 py-1 rounded text-2xl font-semibold mr-8 hover:bg-gradient-to-r from-indigo-600 to-purple-400 hover:shadow-2xl hover:shadow-indigo-500/50"
              onClick={handlePrev}
              type="button">
              Previous
            </button>
          )}

          {isFinished ? (
            <button
              key="submit"
              className="px-10 py-1 rounded text-2xl font-semibold hover:bg-gradient-to-r from-indigo-600 to-purple-400 hover:shadow-2xl hover:shadow-indigo-500/50"
              type="submit">
              Finish
            </button>
          ) : (
            <button
              key="next"
              className="px-10 py-1 rounded text-2xl font-semibold hover:bg-gradient-to-r from-indigo-600 to-purple-400 hover:shadow-2xl hover:shadow-indigo-500/50"
              onClick={handleNext}
              type="button">
              Next
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
