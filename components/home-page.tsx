'use client'
import React, { useState } from 'react'
import Navbar from './navbar';
import Image from 'next/image';
import useCollections from '@/hook/useCollections';
import CollectionsCard from './collections-card';

const HomePage = () => {
    const { collections } = useCollections();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <Navbar></Navbar>

            {/* immagine centrale */}
            <div className="w-full flex flex-col items-center my-8">
                <Image
                    src="/logo3x.png" // sostituisci con il percorso reale
                    alt="Immagine centrale"
                    className="max-w-full h-auto rounded-lg shadow-md"
                    width={400} // specifica la larghezza desiderata
                    height={200} // specifica l'altezza desiderata
                />
                {/* H1 centrale con gradiente */}
                <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center
                   bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-purple-end)]
                   bg-clip-text text-transparent">
                    Titolo Centrale
                </h1>
            </div>

            <div className="w-full flex justify-center my-8">
                <div className="flex space-x-4">


                    {/* Bottone dropdown */}
                    <div className="relative">
                        <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center transition-colors duration-200"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Menu a Tendina
                            <svg
                                className="ml-2 w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown items */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Opzione 1</button>
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Opzione 2</button>
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Opzione 3</button>
                            </div>
                        )}
                    </div>

                    {/* Bottone normale */}
                    <button className="bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-purple-end)] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200">
                        Bottone Normale
                    </button>

                </div>
            </div>

            {/* cards */}
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {collections.map((collection) => (
                    <CollectionsCard key={collection.id} collection={collection} />
                ))}
            </div>
        </>
    )
}

export default HomePage

