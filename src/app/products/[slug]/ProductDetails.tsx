"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Badge from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import WixImage from "@/components/WixImage";
import { products } from "@wix/stores";
import { InfoIcon } from "lucide-react";
import { useState } from "react";
import ProductOptions from "./ProductOptions";

interface ProductDetailsProps {
  product: products.Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
      <div className="basis-2/5">
        <WixImage
          mediaIdentifier={product.media?.mainMedia?.image?.url}
          alt={product.media?.mainMedia?.image?.altText}
          width={1200}
          height={1200}
          className="sticky top-0"
        />
      </div>
      <div className="basis-3/5 space-y-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold lg:text-4xl">{product.name}</h1>
          {product.brand && (
            <div className="text-muted-foreground">{product.brand}</div>
          )}
          {product.ribbon && <Badge className="block">{product.ribbon}</Badge>}
        </div>
        {product.description && (
        <div dangerouslySetInnerHTML={{__html: product.description}}
        className="prose dark:prose-invert"/>
        )}
        <ProductOptions product={product}/>
      </div>
    </div>
  );
}
