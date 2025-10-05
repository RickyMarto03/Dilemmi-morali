import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo o titolo a sinistra */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-gray-800">Il Mio Sito</h1>
                    </div>

                    {/* Link impostazioni a destra */}
                    <div className="flex items-center">
                        <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
                            Impostazioni
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar