import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve,ms)) 
}

export function formatCurrency(
  price: number | string =0,
  currency : string = "EUR",
) {
  return Intl.NumberFormat("de", {style: "currency", currency})
  .format(Number(price))
}