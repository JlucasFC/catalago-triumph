/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home() {
  return (
<>
    <div className="flex flex-col justify-center items-center gap-8">
      <a href="/lista" className="text-primary font-bold items-center hover:bg-secondary/25 w-3xs lg:md:w-4/12 h-12 flex justify-center bg-secondary rounded-2xl ">CATALAGO</a>
      <Link href="http://wa.me/5592994956878?text=Olá!%20Gostaria%20de%20saber%20mais!" target="_blank" className="text-primary font-bold items-center hover:bg-secondary/25 w-3xs lg:md:w-4/12 h-12 flex justify-center bg-secondary rounded-2xl ">WHATSAPP</Link>
      {/* <img src={'/Speed400.avif'} alt="moto" className="" /> */}  
    </div>
</>
  );
}
