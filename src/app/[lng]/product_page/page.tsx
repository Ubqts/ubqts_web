import { useTranslation } from '@/src/i18n';
import './page.css';

type ProductPageProps = { params: { lng: string; }; }

export default async function ProductPage({ params: { lng } }: ProductPageProps) {
    const { t } = await useTranslation(lng, "product-page");

    return (
        <>
            {/* 感覺可以放個所有產品的概述之類的 */}
            <div className="content">
                <h1 className="title">{t("title")}</h1>
                <img src="https://picsum.photos/400/200?random=1" alt="productImg" />
                <p>{t("product-introduction-content_1")}</p>
                <p>{t("product-introduction-content_2")}</p>
                <p>{t("product-introduction-content_3")}</p>
                <p>{t("product-introduction-content_4")}</p>
                <p>{t("product-introduction-content_5")}</p>
                <p>{t("product-introduction-content_6")}</p>
                <p>{t("product-introduction-content_7")}</p>
            </div>
        </>
    );
}