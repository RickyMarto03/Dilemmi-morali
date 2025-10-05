'use client'
import useCards from '@/hook/useCards';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const CardPage = () => {
  const { cardslug } = useParams();
  const slugStr = Array.isArray(cardslug) ? cardslug[0] : cardslug;

  if (!slugStr) {
    throw new Error("Parametro slug mancante nella route");
  }

  // ora `useCards` ti restituisce un singolo oggetto `card` invece di un array
  const { card } = useCards(slugStr);

  if (!card) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Caricamento in corso...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-center mb-8">
        <div className="p-[3px] rounded-2xl bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-purple-end)]">
          <div className="px-6 py-3 bg-white rounded-xl">
            <p className="text-xl text-gray-800">Card Page</p>
          </div>
        </div>
      </div>

      <div
        className="w-full h-[60vh] flex flex-col rounded-3xl shadow-2xl bg-white overflow-hidden"
      >
        {/* Immagine in alto */}
        <div className="h-1/2 w-full p-8 shadow-xl bg-white rounded-2xl flex items-center justify-center">
          <Image
            src="/logo.png"
            alt={card.name}
            width={600}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Testo sotto */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officia voluptas voluptatum nam in sapiente temporibus minima amet voluptatem excepturi commodi quisquam at, velit, porro quibusdam architecto labore qui nihil!
          </p>
        </div>
      </div>

      <div className='flex justify-between mt-8 p-4'>
        <button className='border rounded p-4 text-3xl'>Azione 1</button>
        <button className='border rounded p-4 text-3xl'>Azione 2</button>
      </div>

      <div className='flex justify-between mt-8 p-2'>
        <p>precedente</p>
        <p>n/n</p>
        <p>successivo</p>
      </div>

    </div>
  );
};

export default CardPage;
