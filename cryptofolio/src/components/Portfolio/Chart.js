import { useState, useEffect, useCallback } from 'react';
import { priceFormatter } from '../../helpers';
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  Area,
} from 'recharts';

import Loading from '../Loading';
import Error from '../Error';

const urlArray = [
  `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7`,
  `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7`,
  `https://api.coingecko.com/api/v3/coins/litecoin/market_chart?vs_currency=usd&days=7`,
];

const Chart = () => {
  //Loading state
  const [isLoading, setIsLoading] = useState(false);
  //Error state
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState([]);

  //Fetch market chart data

  const fetchAllData = async (urls) => {
    setIsLoading(true);
    setIsLoading(false);
    try {
      const response = await Promise.all(
        urls.map((url) => fetch(url).catch((error) => error))
      );

      //Data conststs price data, market cap data, and total volume data
      const data = await Promise.all(
        response.map((response) =>
          response.json ? response.json().catch((error) => error) : response
        )
      );

      //Get prices from data array
      const priceData = data.map((item) => {
        return item.prices.slice(0, 169);
      });

      //Get timestamps for chart
      const timeStamps = priceData[0].map((stamp) => stamp[0]);

      //Get and add the total price values
      const totalPrices = priceData
        .map((array) => array.map((el) => el[1]))
        .reduce((acc, curr) => acc.map((el, i) => el + curr[i]));

      //Createing a data Object for the chart
      const chartData = timeStamps.map((el, i) => {
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

      setData(chartData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchAllData(urlArray);
  }, []);

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error screen
  if (isError) {
    return <Error />;
  }

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tick={false} />
          <YAxis dataKey="price" unit="$" />

          <Tooltip formatter={(value) => priceFormatter(value)} />
          <Area
            type="monotone"
            dataKey="price"
            stroke="green"
            fillOpacity={1}
            fill="url(#priceGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
