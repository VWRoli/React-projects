import { useGlobalContext } from '../../context';
import { priceFormatter, priceChangeFormatter, calcYtd } from '../../helpers';
import Loading from '../Loading';
import Error from '../Error';
import Chart from './Chart';
import ChartButtons from './ChartButtons';

const Stats = () => {
  const {
    totalValue,
    isLoading,
    isError,
    totalValueChange,
    assets,
  } = useGlobalContext();

  //Buttons
  const buttons = [
    { label: '1d', days: '1' },
    { label: '7d', days: '7' },
    { label: '30d', days: '30' },
    { label: '90d', days: '90' },
    { label: 'YTD', days: calcYtd() },
  ];

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
              {priceChangeFormatter(
                calcChangePercentage(totalValue, totalValueChange)
              )}
            </span>
          )}
        </div>
      )}

      <Chart />
      <ChartButtons buttons={buttons} />
    </section>
  );
};

export default Stats;
