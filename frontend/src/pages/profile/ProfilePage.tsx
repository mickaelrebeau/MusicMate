import { SignUp } from "@/src/components/formSignup";
import { MusicGender } from "@/src/components/musicGender";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function Profile() {
    const steps = [<SignUp />, <MusicGender />];
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    useEffect(() => {
        const title = document.querySelector('.animate-fadeIn');
        title?.classList.add('animate');
    }, []);
    
    return (
        <>
            <section className="h-full flex flex-col items-center justify-center animate-fadeIn">
                <p className="w-[900px] ml-40 text-start font-semibold"><NavLink to={"/"}>Back to home</NavLink></p>
                <div className="h-16 flex text-center text-xl font-semibold">
                    <p>Step {currentStep + 1} Of {steps.length}</p>
                </div>
                {steps[currentStep]}
                <div className="mt-8 flex">
                    {currentStep > 0 && (
                        <button
                        className="px-6 py-3 rounded-xl text-2xl font-semibold mr-4"
                        onClick={handlePrev}
                        >
                            Previous
                        </button>
                    )}
                    <button
                        className="px-10 py-3 rounded-xl text-2xl font-semibold"
                        onClick={handleNext}
                    >
                        {currentStep === steps.length - 1 ? (
                        <NavLink to={"/"}>Finish</NavLink>
                        ) : (
                        "Next"
                        )}
                    </button>
                    </div>
            </section>
        </>
    )
}