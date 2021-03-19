import { usePriceFormatter, calcYtd } from '../../helpers';
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  Area,
} from 'recharts';
import ChartButtons from './ChartButtons';

import Loading from '../Loading';
import { useGlobalContext } from '../../context';

const Chart = () => {
  const { chartData, isLoading, defaultCurrency } = useGlobalContext();

  //todo Price formatter, couldn't use the one from helpers
  const priceFormatter = (price) => {
    //Locale
    const locale = navigator.language;
    const formattedPrice = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: `${defaultCurrency}`,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
    return formattedPrice;
  };

  //Buttons
  const buttons = [
    { label: '1d', days: '1' },
    { label: '7d', days: '7' },
    { label: '30d', days: '30' },
    { label: '90d', days: '90' },
    { label: 'YTD', days: calcYtd() },
  ];

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tick={false} />
          <YAxis dataKey="price" unit={defaultCurrency} />

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
      <ChartButtons buttons={buttons} />
    </>
  );
};

export default Chart;
