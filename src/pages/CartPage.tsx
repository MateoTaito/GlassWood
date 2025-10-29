import React from "react";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";

const fmt = (v: number) => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(v);

const CartPage: React.FC = () => {
    const { items, totalItems, totalPrice, increment, decrement, remove, clear } = useCart();

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                    <ShoppingCart className="w-7 h-7" /> Carrito
                </h1>

                {items.length === 0 ? (
                    <div className="bg-sand rounded-2xl border border-brand/10 p-8 text-center text-gray-700">
                        Tu carrito está vacío.
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-4">
                            {items.map(it => (
                                <article key={it.id} className="flex items-center justify-between gap-4 bg-sand rounded-xl border border-brand/10 p-4">
                                    <div className="min-w-0">
                                        <h3 className="text-brand font-semibold truncate">{it.name}</h3>
                                        <p className="text-gray-700">{fmt(it.price)}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => decrement(it.id)} aria-label={`Disminuir cantidad de ${it.name}`} title="Disminuir" className="w-8 h-8 rounded-md bg-sand/40 border border-brand/10 flex items-center justify-center text-brand hover:bg-sand/60">
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-8 text-center font-medium">{it.quantity}</span>
                                        <button onClick={() => increment(it.id)} aria-label={`Aumentar cantidad de ${it.name}`} title="Aumentar" className="w-8 h-8 rounded-md bg-sand/40 border border-brand/10 flex items-center justify-center text-brand hover:bg-sand/60">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-brand">{fmt(it.price * it.quantity)}</div>
                                        <button onClick={() => remove(it.id)} className="mt-2 inline-flex items-center gap-1 text-sm text-coral hover:underline">
                                            <Trash2 className="w-4 h-4" /> Quitar
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <aside className="bg-sand rounded-2xl border border-brand/10 p-6 h-fit">
                            <div className="flex justify-between text-gray-700 mb-2">
                                <span>Productos</span>
                                <span className="font-medium">{totalItems}</span>
                            </div>
                            <div className="flex justify-between text-brand text-lg font-bold">
                                <span>Total</span>
                                <span>{fmt(totalPrice)}</span>
                            </div>
                            <button onClick={clear} className="mt-4 w-full bg-brand text-white rounded-lg py-3 hover:bg-positivegreen transition-colors">Vaciar carrito</button>
                        </aside>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CartPage;
