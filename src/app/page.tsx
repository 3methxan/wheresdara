import Image from "next/image";
import banner from "@/assets/anner.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightSquare } from "lucide-react";
import { Suspense } from "react";
import Product from "@/components/Product";
import { delay } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { getCollectionBySlug } from "@/api/wix/collections";
import { queryObjects } from "v8";
import { queryProducts } from "@/api/wix/products";

// Banner and slogano

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl space-y-7 px-5 py-10 border-transparent">
      <div className="flex items-center bg-secondary md:h-96">
        <div className="space-y-7 p-10 text-center md:w-1/2">
          <h1 className="text-3xl font-bold md:text-4xl">
            Glorious Prints, so good, you want it on a choker.
          </h1>
          <p>
            Exclusive, hard to find, offensive. Fuel the cult of individualism.
          </p>
          <Button asChild>
            <Link href={"/shop"}>
              Shop Now!
              <ArrowRightSquare className="ml-1 size-5" />
            </Link>
          </Button>
        </div>
        <div className="relative hidden h-full w-1/2 md:block">
          <Image
            src={banner}
            alt="Nice mosaic banner here"
            className="h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent" />
        </div>
      </div>
      <Suspense fallback={<WaitingBones />}>
        <FeaturedProducts />
      </Suspense>
    </main>
  );
}

async function FeaturedProducts() {
  await delay(1000);

  const collection = await getCollectionBySlug("featured-products");

  if (!collection?._id) {
    return null;
  }

  const featuredProducts = await queryProducts ({
    stuffIds: collection._id,  
  });

  if (!featuredProducts.items.length) {
    return null;
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">Whats hot:</h2>
      <div className="flex grid-cols-2 flex-col gap-6 sm:grid md:grid-cols-3 lg:grid-cols-4">
        {featuredProducts.items.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
  return "Whats hot right now";
}

// can be used as separate page but ill keep here
function WaitingBones() {
  return (
    <div className="flex grid-cols-2 flex-col gap-6 pt-12 sm:grid md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-[31rem] w-full" />
      ))}
    </div>
  );
}
