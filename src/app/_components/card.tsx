/* eslint-disable @next/next/no-img-element */
// eslint-disable @typescript-eslint/no-explicit-any
"use client";

import Link from "next/link";
import { useState } from "react";

interface CardProps {
  img_moto: string;
  model: string;
  codigo: string;
  credito: string;
  parcela: string;
}

export const Card: React.FC<CardProps> = ({ img_moto, model, codigo, credito, parcela }) => {
  const [showModal, setModal] = useState(false);

  return (
    <div className="shadow shadow-foreground/50 relative flex flex-col bg-primary w-96 h-auto p-3 border-accent justify-center items-center gap-2 rounded-2xl">
      <img src={img_moto} alt={model} className="bg-white w-full h-52" />
      <h2 className="font-bold text-2xl">{model}</h2>
      <button
        onClick={() => setModal(true)}
        className="bg-secondary text-primary w-4/5 rounded-3xl h-8"
      >
        Planos de consorcio
      </button>
      <Link
        href={`https://wa.me/5592994956878?text=Olá!%20Fiquei%20interessado%20na%20${model}%20e%20gostaria%20de%20saber%20mais`}
        target="_blank"
        className="bg-secondary text-primary w-4/5 rounded-3xl h-8 flex items-center justify-center"
      >
        Saiba Mais!
      </Link>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md animate-in fade-in zoom-in">
            <h3 className="text-xl font-bold mb-4 text-center">
              Plano de Consórcio
            </h3>

            <table className="w-full border-collapse border border-gray-300 text-sm bg-primary">
              <thead className="bg-secondary">
                <tr>
                  <th className="border border-gray-300 p-2">Modelo</th>
                  <th className="border border-gray-300 p-2">Código</th>
                  <th className="border border-gray-300 p-2">Crédito</th>
                  <th className="border border-gray-300 p-2">Parcelas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">{model}</td>
                  <td className="border border-gray-300 p-2">{codigo}</td>
                  <td className="border border-gray-300 p-2">
                    {credito}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {parcela}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-center mt-5">
              <button
                onClick={() => setModal(false)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
