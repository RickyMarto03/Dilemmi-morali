'use client'
import useCards from '@/hook/useCards';
import { useParams } from 'next/navigation';
import React from 'react';

const CardPage = () => {
  const { cardslug } = useParams();
  const slugStr = Array.isArray(cardslug) ? cardslug[0] : cardslug;

  if (!slugStr) {
    throw new Error("Parametro slug mancante nella route");
  }

  const { cards } = useCards(slugStr);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Card Page</h1>
      <div className="flex flex-col gap-12 items-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full h-[85vh] flex items-center justify-center rounded-3xl shadow-2xl 
                       bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-purple-end)] 
                       text-white transition-transform hover:scale-[1.02]"
          >
            <h2 className="text-6xl font-extrabold">{card.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
