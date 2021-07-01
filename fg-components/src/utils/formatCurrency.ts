export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('de-CH', {
    style: 'currency',
    useGrouping: true,
    currency: 'CHF',
    minimumFractionDigits: 2
  })
    .format(amount);
}
