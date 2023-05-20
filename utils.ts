

export function currency(price: number, fraction: number = 2): string {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { currency: string };
  };

  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: publicRuntimeConfig.currency,
    maximumFractionDigits: fraction,
    minimumFractionDigits: fraction,
  });

  return formatCurrency.format(price);
}
