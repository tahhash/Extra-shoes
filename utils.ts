import getConfig from 'next/config';

export function currency(price: number, fraction: number = 2): string {
  const { publicRuntimeConfig } = getConfig() || { publicRuntimeConfig: { showCurrencySymbol: true } };

  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: publicRuntimeConfig.currency,
    currencyDisplay: publicRuntimeConfig.showCurrencySymbol ? 'symbol' : 'code',
    maximumFractionDigits: fraction,
    minimumFractionDigits: fraction,
  });

  return formatCurrency.format(price);
}
