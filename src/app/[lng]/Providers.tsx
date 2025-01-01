import React from "react";

import { AdProvider } from "@/src/context/Ads";
import { NewsProvider } from "@/src/context/News";
import { ProductProvider } from "@/src/context/Products";
import { DownloadProvider } from "@/src/context/Downloads";

type Props = {
    children: React.ReactNode;
};
export default function Providers({ children }: Props) {
    return (
        <ProductProvider>
            <AdProvider>
                <NewsProvider>
                    <DownloadProvider>
                        {children}
                    </DownloadProvider>
                </NewsProvider>
            </AdProvider>
        </ProductProvider>
    );
}