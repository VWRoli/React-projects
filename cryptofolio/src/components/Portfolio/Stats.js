import { useGlobalContext } from '../../context';
import { priceFormatter, priceChangeFormatter } from '../../helpers';
import Loading from '../Loading';
import Chart from './Chart';

const Stats = () => {
  const {
    totalValue,
    isLoading,
    totalValueChange,
    assets,
  } = useGlobalContext();

  //Calculate percentage change
  const calcChangePercentage = (curValue, change) => {
    let percentage;
    const newPrice = curValue;

    if (change > 0) {
      const oldPrice = curValue - change;
      return (percentage = [(newPrice - oldPrice) / oldPrice] * 100);
    } else {
      const oldPrice = curValue + Math.abs(change);
      return -Math.abs((percentage = [(oldPrice - newPrice) / oldPrice] * 100));
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
          {assets.length === 0 ? (
            <span>0%</span>
          ) : (
            <span className={totalValueChange > 0 ? 'positive' : 'negative'}>
              {priceChangeFormatter(
                calcChangePercentage(totalValue, totalValueChange)
              )}
            </span>
          )}
        </div>
      )}

      <Chart />
      <div className="graph-btn-container">
        <h3 style={{ color: '#1489f3', fontWeight: '400' }}>
          Chart data for the last 7 days
        </h3>
        {/* <button type="button">1d</button>
        <button type="button">7d</button>
        <button type="button">30d</button>
        <button type="button">All</button> */}
      </div>
    </section>
  );
};

export default Stats;
