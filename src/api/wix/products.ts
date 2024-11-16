import { getWixClient } from "@/lib/wix-client.base";

type ProductsSort = "last_updated" | " price_asc" | "price_desc";

interface QueryProductsFilter {
  stuffIds?: string[] | string;
  sort?: ProductsSort;
}

export async function queryProducts({
  stuffIds,
  sort = "last_updated",
}: QueryProductsFilter) {
  const wixClient = getWixClient();

  let query = wixClient.products.queryProducts();

  const stuffIdsArray = stuffIds
    ? Array.isArray(stuffIds)
      ? stuffIds
      : [stuffIds]
    : [];

  if (stuffIdsArray?.length > 0) {
    query = query.hasSome("collectionIds", stuffIdsArray);
  }

  switch (sort) {
    case "price_desc":
      query = query.descending("price");
      break;
    case " price_asc":
      query = query.ascending("price");
      break;
    case "price_desc":
      query = query.descending("lastUpdated");
      break;
  }

  return query.find();
}

/** getting a singular product via slug */

export async function getStuffWSlug(slug: string) {
  const wixClient = getWixClient();

  const {items} = await wixClient.products
    .queryProducts()
    .eq("slug", slug)
    .limit(1) /**overkill, but is a possibility */
    .find();

  const product = items[0];

  if (!product || !product.visible) {
    return null;
  }
  return product;
}
