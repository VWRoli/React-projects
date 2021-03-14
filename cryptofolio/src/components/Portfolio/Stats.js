import { useGlobalContext } from '../../context';
import { priceFormatter, priceChangeFormatter } from '../../helpers';
import Loading from '../Loading';
import Chart from './Chart';

const Stats = () => {
  const { totalValue, isLoading, coinInfo, assets } = useGlobalContext();
  console.log(totalValue);

  //Get the 24h price change for the whole portfolio
  // const assetValueChange = coinInfo
  //   .map((coin, i) => coin.price_change_24h * assets.holdings[i])
  //   .reduce((acc, cur) => acc + cur, 0);

  //console.log(assetValueChange);

  //Calculate percentage change
  const calcChangePercentage = (value, change) => {
    let percentage;
    const newPrice = value;

    if (change > 0) {
      const oldPrice = value - change;
      return (percentage = [(newPrice - oldPrice) / oldPrice] * 100);
    } else {
      const oldPrice = value + Math.abs(change);
      return (percentage = [(oldPrice - newPrice) / oldPrice] * 100);
    }
  };

  return (
    <section id="stats">
      <h2>Overview</h2>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="main-asset-value">
          {priceFormatter(totalValue)}
          {/*   {assets.length === 0 ? (
            <span>0%</span>
          ) : (
            <span className={assetValueChange > 0 ? 'positive' : 'negative'}>
              {priceChangeFormatter(
                calcChangePercentage(totalValue, assetValueChange)
              )}
            </span>
          )} */}
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
