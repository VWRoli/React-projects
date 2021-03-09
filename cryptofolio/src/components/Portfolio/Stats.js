import { useGlobalContext } from '../../context';
import Chart from './Chart';

const Stats = () => {
  const { coins } = useGlobalContext();
  const btc = coins[0];
  console.log(btc);

  return (
    <section id="stats">
      <h2>Overview</h2>
      {/* <div className="main-asset-value">
        {priceFormatter(btc.current_price)}{' '}
        <span
          className={
            btc.price_change_percentage_24h > 0 ? 'positive' : 'negative'
          }
        >
          {priceChangeFormatter(btc.price_change_percentage_24h)}
        </span>
        </div> */}
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
