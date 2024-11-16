import Link from "next/link";
import logo from "@/assets/IMG_3266 copy.png";
import Image from "next/image";
import { getCart } from "@/api/wix/carts";

export default async function Navbar() {
  const cart = await getCart();
  const totalQuantity =
    cart?.lineItems.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;
  return (
    <header className="bg-background shadow-2xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 p-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Site logo" width={120} height={120}></Image>
        </Link>
        {totalQuantity} Goodies
      </div>
    </header>
  );
}
