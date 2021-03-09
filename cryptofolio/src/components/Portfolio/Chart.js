import { priceChangeFormatter, priceFormatter } from '../../helpers';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  ReferenceLine,
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
    const d = new Date(el[0]);
    return { day: d, price: el[1] };
  });
  console.log(graphObj);
  return (
    <>
      <ResponsiveContainer width={450} height="80%">
        <AreaChart
          data={graphObj}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
          <ReferenceLine
            y={4000}
            label="Max"
            stroke="red"
            strokeDasharray="3 3"
          />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
