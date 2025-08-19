export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function generateRandomIds(count: number): number[] {
  const ids: number[] = [];

  while (ids.length < count) {
    const randomId = Math.floor(Math.random() * 194) + 1;
    if (!ids.includes(randomId)) {
      ids.push(randomId);
    }
  }

  return ids;
}
