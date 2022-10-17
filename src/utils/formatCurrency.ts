export const formatCurrency = (number: number) =>
  Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(number);
