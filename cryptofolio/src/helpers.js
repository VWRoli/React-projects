//Formatter functions
//Format supply and marketcap
const numberFormatter = (supply) => {
  const formattedSupply = new Intl.NumberFormat('hu-HU', {
    notation: 'compact',
    compactDisplay: 'long',
  }).format(supply);
  return formattedSupply;
};

//Locale
const locale = navigator.language;

//Format Price Change
export const priceChangeFormatter = (priceChange) => {
  const formattedPriceChange = new Intl.NumberFormat(locale, {
    style: 'percent',
    signDisplay: 'exceptZero',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(priceChange / 100);

  return formattedPriceChange;
};

//Format price
export const priceFormatter = (price) => {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
  return formattedPrice;
};
