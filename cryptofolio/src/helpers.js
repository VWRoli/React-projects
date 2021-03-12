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

//URL formatter
//`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${assets[0].id}%2C%20${assets[1].id}%2C%20${assets[2].id}`
export const urlFormatter = (url, array) => {
  const urlPart = array
    .map((item) => {
      return `${item.id}%2C%20`;
    })
    .join('');

  return `${url}${urlPart}`;
};
