// utils.ts

export function currency(price: number, fraction: number = 2): string {
  const formattedPrice = price.toFixed(fraction);
  return formattedPrice;
}
