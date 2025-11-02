/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function Header () {
    const word = "TRIUMPH";
    const repeatCount = 20;
    
    return (
        <header className="relative flex h-18 justify-center bg-secondary py-6 mb-28 lg:mb-34 md:mb-34">
            <div className="flex flex-nowrap justify-center w-dvw overflow-hidden">
                {Array.from({length: repeatCount}).map((_, i) => (
                    <span key={i}
                    className="mx-2 text-2xl font-bold text-primary/30">
                        {word}
                    </span>
                ))}
            </div>
            <div className="absolute top-0 left-0"> <Link href={'/'} className="text-primary bg-stone-800 px-3 rounded-2xl">Home</Link></div>
            <img src={'/thiago-guerra.webp'} alt="perfil" className="absolute rounded-full border-primary w-24 h-24-bottom-16 sm:w-32 sm:h-32"/>
        </header>
    )
}