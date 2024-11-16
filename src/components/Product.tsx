/* eslint-disable @next/next/no-img-element */
import { products } from "@wix/stores";

import Link from "next/link"; // assuming you are using Next.js
import { media as wixMedia } from "@wix/sdk";
import WixImage from "./WixImage";
import Badge from "./ui/badge";
import { formatCurrency } from "@/lib/utils";
import SaleMark from "./SaleMark";

interface ProductProps {
  product: products.Product;
}

export default function Product({ product }: ProductProps) {
  const mainImage = product.media?.mainMedia?.image;

  return (
    <Link href={`/products/${product.slug}`} className="h-full border bg-card">
      <div className="space-y-3 p-3">
        <h3 className="text-lg font-bold">{product.name}</h3>
      </div>
      <div className="relative overflow-hidden">
        <WixImage
          mediaIdentifier={mainImage?.url}
          alt={mainImage?.altText}
          width={700}
          height={700}
          className="duration-420 transition-transform hover:scale-110"
        />
        <div className="absolute bottom-3 right-3 flex flex-wrap items-center gap-2">
          {product.ribbon && <Badge>{product.ribbon}</Badge>}
          {product.discount && <SaleMark data={product.discount}/>}
          <Badge className="bg-secondary font-medium text-secondary-foreground">
            {getSnazzyPrice(product)}
          </Badge>
        </div>
      </div>

      <div className="space-y-3 p-3">
        <div
          className="line-clamp-5"
          dangerouslySetInnerHTML={{ __html: product.description || "" }}
        />
      </div>
    </Link>
  );
}

function getSnazzyPrice(product: products.Product) {
  const minPrice = product.priceRange?.minValue;
  const maxPrice = product.priceRange?.maxValue;

  if (minPrice && maxPrice && minPrice !== maxPrice) {
    return `from ${formatCurrency(minPrice, product.priceData?.currency)}`;
  } else {
    return (
      product.priceData?.formatted?.discountedPrice ||
      product.priceData?.formatted?.price ||
      "n/a"
    );
  }
}
