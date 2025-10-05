import React from 'react'
import { Collections } from "@/lib/directus";
import Link from 'next/link';
interface CollectionsCardProps {
    collection: Collections;
}
const CollectionsCard = ({ collection }: CollectionsCardProps) => {
    return (
        <div
            key={collection.id}
            className="rounded-2xl p-[2px] bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-purple-end)] shadow-lg"
        >
            <div className="relative bg-white rounded-2xl p-6">
                {/* Titolo e chip a destra */}
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold">{collection.name}</h2>
                    <span className="px-3 py-1 text-white text-sm font-medium rounded-full bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-purple-end)]">
                        {collection.price_type}
                    </span>
                </div>

                {/* Chips sotto il titolo */}
                <div className="flex mb-4">
                    <span className="px-2 py-1 text-white text-xs font-medium rounded-full bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-purple-end)]">
                        {collection.category}
                    </span>
                </div>

                {/* Descrizione */}
                <p className="text-gray-600 mb-6">{collection.description}</p>

                {/* Numero in basso a destra */}
                <div className="flex justify-end mb-4 text-gray-700 font-semibold">
                    {collection.id.length} {/* esempio di numero */}
                </div>

                {/* Bottone full-width */}
                <Link
                    href={`/${collection.id}`}
                    className="w-full inline-block text-center bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-purple-end)] hover:from-pink-500 hover:to-purple-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                >
                    Visualizza
                </Link>

            </div>
        </div>
    )
}

export default CollectionsCard