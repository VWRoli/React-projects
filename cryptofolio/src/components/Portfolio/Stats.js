import { useGlobalContext } from '../../context';
import { priceFormatter, priceChangeFormatter } from '../../helpers';
import Loading from '../Loading';
import Error from '../Error';
import Chart from './Chart';
import { useState } from 'react';
import PieChart from './PieChart';
import { FaChartLine, FaChartPie } from 'react-icons/fa';

const Stats = () => {
  const [isLineChart, setIsLineChart] = useState(true);

  const {
    totalValue,
    isLoading,
    isError,
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

  if (isError) return <Error />;

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
              <span style={{ fontSize: '1.5rem', color: '#bbb' }}>24h: </span>
              {priceChangeFormatter(
                calcChangePercentage(totalValue, totalValueChange)
              )}
            </span>
          )}
        </div>
      )}
      <div className="chart-btn-container">
        <button className="chart-btn" onClick={() => setIsLineChart(true)}>
          <FaChartLine className="stat-btn-icon" /> Line Chart
        </button>
        <button className="chart-btn" onClick={() => setIsLineChart(false)}>
          <FaChartPie className="stat-btn-icon" /> Pie Chart
        </button>
      </div>

      {isLineChart ? <Chart /> : <PieChart clicked={isLineChart} />}
    </section>
  );
};

export default Stats;
