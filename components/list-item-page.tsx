'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import useListItems from '@/hook/useListItems'
import Navbar from './navbar'
import Link from 'next/link'

const ListItemPage = () => {
    const { slug } = useParams()
    const slugStr = Array.isArray(slug) ? slug[0] : slug;
    console.log("Parametro slug ricevuto:", slugStr);
    if (!slugStr) {
        throw new Error("Parametro slug mancante nella route");
    }

    const { listItems } = useListItems(slugStr);

    return (
        <>
            <Navbar />
            <div className="p-4 space-y-4">
                <h1 className="text-2xl font-bold mb-4">Fare fetch titolo collezione</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {listItems.map((item) => (
                        <Link key={item.id} href={`${slugStr}/${item.id}`}>
                            <div
                                key={item.id}
                                className="p-6 rounded-2xl text-white shadow-lg bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-purple-end)]"
                            >
                                <h2 className="text-xl font-semibold">{item.name}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListItemPage
