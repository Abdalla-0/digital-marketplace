import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface IOptionsProps {
  currency?: "USD" | "EUR" | "GBP" | "BDT",
  notation?: Intl.NumberFormatOptions["notation"]
}

export function formatPrice(price: number | string, options: IOptionsProps = {}) {
  const { currency = "USD", notation = "compact" } = options;
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}