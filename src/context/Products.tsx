'use client'
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export type Product = {
    id: number;
    name: string;
    picture: string;
    description: string;
    language: string;
};

export type ProductContext = {
    products?: Product[];
    setProducts?: (product: Product[]) => void;
    sendProduct?: (product: Omit<Product, 'id'>) => void;
};

export const ProductContext = createContext<ProductContext>({
    products: [],
    setProducts: () => {},
    sendProduct: async () => {},
});

type Props = {
    children: React.ReactNode;
};
export function ProductProvider({ children }: Props) {
    // const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch('/api/products', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await res.json();
                // console.log(data);
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, []);

    const sendProduct = async (product: Omit<Product, 'id'>) => {
        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                body: JSON.stringify(product),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ProductContext.Provider value={{ products, setProducts, sendProduct }}>
            {children}
        </ProductContext.Provider>
    );
}