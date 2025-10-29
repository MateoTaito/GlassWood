import React from "react";
import { CupSoda, ShoppingCart } from "lucide-react";
import { products, type Product } from "../data/products";
import { useCart } from "../context/CartContext";

interface ProductCatalogProps {
    items?: readonly Product[];
    className?: string;
}

const currencyFormat = (value: number, currency?: string) => {
    try {
        return new Intl.NumberFormat("es-CL", { style: "currency", currency: currency ?? "CLP", maximumFractionDigits: 0 }).format(value);
    } catch {
        return `$${value.toLocaleString("es-CL")}`;
    }
};

const ProductCatalog: React.FC<ProductCatalogProps> = ({ items = products, className = "" }) => {
    const { addItem } = useCart();
    return (
        <section className={`py-12 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-6">Lorem ipsum catalogo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {items.map((p) => (
                        <article key={p.id} className="flex items-center gap-4 sm:gap-6 bg-sand rounded-2xl border border-brand/10 p-4 sm:p-6 hover:shadow-sm transition-shadow">
                            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-sand/40 border border-brand/10 flex items-center justify-center text-brand">
                                <CupSoda className="w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg sm:text-xl font-semibold text-brand truncate">{p.name}</h3>
                                <p className="text-gray-700 text-sm sm:text-base line-clamp-2">{p.description}</p>
                            </div>
                            <div className="ml-2 sm:ml-4 text-right flex-shrink-0">
                                <div className="text-lg sm:text-xl font-bold text-brand">{currencyFormat(p.price, p.currency)}</div>
                                <button
                                    onClick={() => addItem(p)}
                                    className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-brand text-white hover:bg-positivegreen transition-colors text-sm"
                                    aria-label={`Agregar ${p.name} al carrito`}
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    Agregar
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCatalog;
