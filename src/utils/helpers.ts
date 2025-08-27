export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function getDiscountedPrice(
  price: number,
  discountPercentage: number,
): string {
  if (discountPercentage <= 0) return formatCurrency(price);
  if (discountPercentage >= 100) return formatCurrency(0);

  const discount = (price * discountPercentage) / 100;
  const finalPrice = price - discount;

  return formatCurrency(+finalPrice.toFixed(2));
}

export function getWindowSize() {
  const windowSize = window.innerWidth;

  return windowSize;
}
