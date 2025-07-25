import React, { useEffect } from 'react';
import { Menu, X } from 'lucide-react';
function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <h1 className="text-red">Hola mundo</h1>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <img src="nube_blanca.png" className="h-24 w-auto" alt="logo" />
                        <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-primary'
                            }`}>
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        {['Inicio', 'Nosotros', 'Servicios'].map((item) => (
                            <button
                                key={item}
                                // onClick={() => }
                                className={`text-xl transition-colors hover:text-orange-500 ${isScrolled ? 'text-gray-700' : 'text-other'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4">
                        {['tours', 'services', 'gallery', 'testimonials', 'contact'].map((item) => (
                            <button
                                key={item}
                                // onClick={() => }
                                className="block w-full text-left py-2 text-gray-700 hover:text-orange-500"
                            >
                                hola
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;