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
export const urlFormatter = (url, array) => {
  const urlPart = array
    .map((item) => {
      return `${item.id}%2C%20`;
    })
    .join('');

  return `${url}${urlPart}`;
};

//Format chart data
export const chartDataFormatter = (data) => {
  //Get prices from chart data array, because it has market and voluma data too
  const priceData = data.map((item) => {
    return item.prices.slice(0, 169);
  });

  //Get timestamps for chart

  if (!priceData[0]) return;

  const timeStamps = priceData[0].map((stamp) => stamp[0]);

  //Get and add the total price values
  const totalPrices = priceData
    .map((array) => array.map((el) => el[1]))
    .reduce((acc, curr) => acc.map((el, i) => el + curr[i]));

  //Createing a data Object for the chart
  const chartDataObj = timeStamps.map((el, i) => {
    //Configuration
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      weekday: 'long',
    };

    //Locale
    const locale = navigator.language;
    //Formatting the date
    const formattedDate = new Intl.DateTimeFormat(locale, options).format(
      new Date(el)
    );

    return { day: formattedDate, price: totalPrices[i] };
  });
  return chartDataObj;
};
