import { getStuffWSlug } from "@/api/wix/products";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

interface PageProps {
    params: {slug: string}
}

export default async function Page({params:{slug}}: PageProps) {
    const product = await getStuffWSlug(slug);

    if (!product?._id) notFound();

    return <main className="mx-auto max-w-7xl space-y-7 px-5 py-10 border-transparent">
                <ProductDetails product={product} />

</main>

}