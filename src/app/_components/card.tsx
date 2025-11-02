/* eslint-disable @next/next/no-img-element */

export function Card(props: any) {
    interface CardProps {
        img_moto: string;
        model: string;
        codigo: string;
        credito: string;
        mensal: string;
    }

  return (
      <div className="relative bg-primary w-96 h-auto">
        <img src={"/Speed400.avif"} alt={props.model}/> 
      </div>
  );
}
