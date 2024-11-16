import { getWixClient } from "@/lib/wix-client.base";

/* for getting the cart from wix*/
export async function getCart() {
    const wixClient = getWixClient();
    try {
      return await wixClient.currentCart.getCurrentCart();
    } catch (error) {
      if (
        (error as any).details.applicationError.code === "OWNED_CART_NOT_FOUND"
      ) {
        return null;
      } else {
        throw error;
      }
    }
  }