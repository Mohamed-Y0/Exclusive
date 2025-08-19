export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function getDiscountedPrice(
  price: number,
  discountPercentage: number,
): number {
  if (discountPercentage <= 0) return price;
  if (discountPercentage >= 100) return 0;

  const discount = (price * discountPercentage) / 100;
  return +(price - discount).toFixed(2);
}
