import { Card } from "../_components/card";

export default function Catalog() {
interface motos {
        img_moto: string;
        model: string
        codigo: string
        credito: string
        parcela: string
    }

    const dadosMotos: motos[] = [
      {
        img_moto: '/Speed400.avif',
        model: 'SPEED 400',
        codigo: 'TR16',
        credito: 'R$ 32.190',
        parcela: 'R$ 329.08'
    },
      {
      img_moto: '/Scrambler400.avif',
        model: 'SCRAMBLER 400',
        codigo: 'TR17',
        credito: 'R$ 36.190',
        parcela: 'R$ 369.97'
    },
      {
        img_moto: '/Trident660.webp',
        model: 'TRIDENT 660 PM',
        codigo: 'TR18',
        credito: 'R$ 52.190',
        parcela: 'R$ 589.77'
    },
      {
        img_moto: '/T100PG.webp',
        model: 'T100 PG',
        codigo: 'TR20',
        credito: 'R$ 57.690',
        parcela: 'R$ 589.77'
    },
      {
        img_moto: '/Daytona660.webp',
        model: 'DAYTONA 660',
        codigo: 'TR25',
        credito: 'R$ 58.190',
        parcela: 'R$ 594.88'
    },
      {
        img_moto: '/Tiger660.webp',
        model: 'TIGER SPORT 660 GFPM',
        codigo: 'TR21',
        credito: 'R$ 59.190',
        parcela: 'R$ 605.11'
    },
      {
        img_moto: '/SpeedTwin900.webp',
        model: 'SPEED TWIN 900 PG',
        codigo: 'TR19',
        credito: 'R$ 61.190',
        parcela: 'R$ 625.55'
    },
  ]
return (
        <div className="flex flex-wrap gap-10">
        {dadosMotos.map((moto, index) => (
        <Card
        key={index}
        img_moto={moto.img_moto}
        model={moto.model}
        codigo={moto.codigo}
        credito={moto.credito}
        parcela={moto.parcela}
        />
      ))}
    </div>
    )
}