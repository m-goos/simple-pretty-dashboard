/** optionally removes decimals */
export const formatCurrency = (number: number, noDecimals?: boolean) =>
  Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: noDecimals ? 0 : 2,
    minimumFractionDigits: noDecimals ? 0 : 2,
  }).format(number);
