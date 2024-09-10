'use client';
import { AdContext } from '../../context/Ads'
import { NewsContext } from '../../context/News'
import { ProductContext } from '../../context/Products'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

import Header from '../../components/header'

export default function Page() {
    const { ads } = useContext(AdContext);
    const { news } = useContext(NewsContext);
    const { products } = useContext(ProductContext);
    const router = useRouter();

    return (
        <>
        </>
    );
}