
export function formatCurrency(
    value: number,
    locale: string = 'en-AR',
    currency: string = 'ARS'
  ): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }