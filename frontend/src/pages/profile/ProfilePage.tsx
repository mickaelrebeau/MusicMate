import { SignUp } from "@/src/components/formSignup";
import { MusicGender } from "@/src/components/musicGender";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";  

const schema = z.object({
  pseudo: z.string(),
  email: z.string().email(),
  genres: z.array(z.string()) 
})  

export type User = z.infer<typeof schema>;

export function Profile() {

    const { register, handleSubmit } = useForm<User>();

    const [user, setUser] = useState<User>({
        pseudo: "",
        email: "",
        genres: []
    })

    const steps = [<SignUp {...{register, user, setUser}}/>, <MusicGender {...{register, user, setUser}} />];
    const [currentStep, setCurrentStep] = useState(0);
    const isFinished = currentStep === steps.length - 1;
    const animationRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const onSubmit: SubmitHandler<User> = (data, e) => {
        e?.preventDefault();
        console.log("Data", data);
        console.log("User", user);
    }

    useEffect(() => {
        animationRef.current?.classList.add('animate');
    }, []);
    
    return (
        <section ref={animationRef} className="h-full flex flex-col items-center justify-center animate-fadeIn">
            <div className="w-[900px] ml-40 flex gap-2 text-start font-semibold">
                <p className="flex items-center gap-2 hover:text-indigo-400">
                    <MoveLeft className="cursor-pointer"/>
                    <NavLink to={"/"}>
                        Back to home
                    </NavLink>
                </p>
            </div>
            <div className="h-16 flex text-center text-xl font-semibold">
                <p>Step {currentStep + 1} Of {steps.length}</p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                
                {steps[currentStep]}
            
                <div className="mt-8 flex justify-center">
                    {currentStep > 0 && (
                        <button
                            className="px-6 py-3 rounded-xl text-2xl font-semibold mr-4"
                            onClick={handlePrev}
                            type="button"
                        >
                            Previous
                        </button>
                    )}

                    {isFinished ? (
                        <button
                            key="submit"
                            className="px-10 py-3 rounded-xl text-2xl font-semibold"
                            type="submit"
                        >
                            Finish
                        </button>
                        ) : (
                        <button
                            key="next"
                            className="px-10 py-3 rounded-xl text-2xl font-semibold"
                            onClick={handleNext}
                            type="button"
                        >
                            Next
                        </button>
                    )}  
                </div>
            </form>
        </section>
    )
}