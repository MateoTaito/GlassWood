import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import type { Product } from "../data/products";

export type CartItem = {
    id: string; // product id
    name: string;
    price: number;
    currency?: string;
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

type Action =
    | { type: "ADD"; product: Product; quantity?: number }
    | { type: "INC"; id: string }
    | { type: "DEC"; id: string }
    | { type: "REMOVE"; id: string }
    | { type: "CLEAR" };

const initialState: CartState = { items: [] };

function reducer(state: CartState, action: Action): CartState {
    switch (action.type) {
        case "ADD": {
            const qty = Math.max(1, action.quantity ?? 1);
            const existing = state.items.find(i => i.id === action.product.id);
            if (existing) {
                return {
                    items: state.items.map(i =>
                        i.id === action.product.id ? { ...i, quantity: i.quantity + qty } : i
                    ),
                };
            }
            return {
                items: [
                    ...state.items,
                    {
                        id: action.product.id,
                        name: action.product.name,
                        price: action.product.price,
                        currency: action.product.currency,
                        quantity: qty,
                    },
                ],
            };
        }
        case "INC":
            return {
                items: state.items.map(i => (i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i)),
            };
        case "DEC":
            return {
                items: state.items
                    .map(i => (i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i))
                    .filter(i => i.quantity > 0),
            };
        case "REMOVE":
            return { items: state.items.filter(i => i.id !== action.id) };
        case "CLEAR":
            return { items: [] };
        default:
            return state;
    }
}

const CartContext = createContext<{
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
    addItem: (product: Product, quantity?: number) => void;
    increment: (id: string) => void;
    decrement: (id: string) => void;
    remove: (id: string) => void;
    clear: () => void;
} | null>(null);

const STORAGE_KEY = "gw_cart_v1";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState, () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return initialState;
            const parsed = JSON.parse(raw) as CartState;
            if (!parsed || !Array.isArray(parsed.items)) return initialState;
            return parsed;
        } catch {
            return initialState;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch {
            // ignore
        }
    }, [state]);

    const value = useMemo(() => {
        const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
        const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
        return {
            items: state.items,
            totalItems,
            totalPrice,
            addItem: (product: Product, quantity?: number) => dispatch({ type: "ADD", product, quantity }),
            increment: (id: string) => dispatch({ type: "INC", id }),
            decrement: (id: string) => dispatch({ type: "DEC", id }),
            remove: (id: string) => dispatch({ type: "REMOVE", id }),
            clear: () => dispatch({ type: "CLEAR" }),
        };
    }, [state]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
};
