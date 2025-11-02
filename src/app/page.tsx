/* eslint-disable @next/next/no-img-element */
 

export default function Home() {
  return (
<>
    <div className="flex flex-col justify-center items-center gap-8">
      <a href="/lista" className="text-primary font-bold items-center hover:bg-secondary/25 w-3xs lg:md:w-4/12 h-12 flex justify-center bg-secondary rounded-2xl ">CATALAGO</a>
      <a href="we.me/" className="text-primary font-bold items-center hover:bg-secondary/25 w-3xs lg:md:w-4/12 h-12 flex justify-center bg-secondary rounded-2xl ">WHATSAPP</a>
      {/* <img src={'/Speed400.avif'} alt="moto" className="" /> */}
    </div>
</>
  );
}
