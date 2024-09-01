import React from "react";

import { AdProvider } from "@/app/context/Ads";
import { NewsProvider } from "@/app/context/News";
import { ProductProvider } from "@/app/context/Products";

type Props = {
    children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  return (
    <ProductProvider>
      <AdProvider>
        <NewsProvider>
            {children}
        </NewsProvider>
      </AdProvider>
    </ProductProvider>
  );
}