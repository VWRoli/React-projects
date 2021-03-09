import { useGlobalContext } from '../../context';
import { priceChangeFormatter, priceFormatter } from '../../helpers';

const Stats = () => {
  const graph_url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7`;
  const { coins } = useGlobalContext();
  const btc = coins[0];
  console.log(btc);

  return (
    <section id="stats">
      <h2>Overview</h2>
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
