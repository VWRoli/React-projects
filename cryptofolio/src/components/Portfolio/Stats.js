import { useGlobalContext } from '../../context';
import { priceFormatter, priceChangeFormatter } from '../../helpers';
import Loading from '../Loading';
import Chart from './Chart';

const Stats = () => {
  const { coins, isLoading } = useGlobalContext();
  const btc = coins[0];

  return (
    <section id="stats">
      <h2>Overview</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="main-asset-value">
          {priceFormatter(btc.current_price)}{' '}
          <span
            className={
              btc.price_change_percentage_24h > 0 ? 'positive' : 'negative'
            }
          >
            {priceChangeFormatter(btc.price_change_percentage_24h)}
          </span>
        </div>
      )}

      <Chart />
      <div className="graph-btn-container">
        <button type="button">1d</button>
        <button type="button">7d</button>
        <button type="button">30d</button>
        <button type="button">All</button>
      </div>
    </section>
  );
};

export default Stats;
