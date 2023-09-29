import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export function Home() {
    
    useEffect(() => {
        const title = document.querySelector('.animate-fadeIn');
        title?.classList.add('animate');
    }, []);

    return (
        <>
            <section className="h-full flex flex-col items-center justify-center animate-fadeIn">
                <p className="text-8xl">
                    👋 
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-400">Welcome </span>
                    to MusicMate !
                </p>
                <p className="max-w-[800px] mt-8 text-slate-500 text-center text-2xl">Music is the universal language of the world and we want to make it easier for you to discover new music from all over the world.</p>
                <button className="mt-8 px-10 py-3 rounded-xl text-2xl font-semibold text-indigo-500 border-indigo-500 hover:text-white hover:bg-gradient-to-r from-indigo-600 to-purple-400 hover:shadow-2xl hover:shadow-indigo-500/50">
                    <NavLink to={"/profile"} >Get Started</NavLink>
                </button>
            </section>
        </>
    )
}