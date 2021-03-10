import { priceFormatter } from '../../helpers';
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  Area,
} from 'recharts';
import { useFetch } from '../../useFetch';
import Loading from '../Loading';
import Error from '../Error';

const graph_url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7`;

const Chart = () => {
  //Convert price array into object
  const { data, isError, isLoading } = useFetch(graph_url);
  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error screen
  if (isError) {
    return <Error />;
  }

  const tempGrapghArray = data.prices;

  const graphObj = tempGrapghArray.map((el) => {
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
      new Date(el[0])
    );

    return { day: formattedDate, price: el[1] };
  });

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={graphObj}>
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
