import { priceChangeFormatter, usePriceFormatter } from '../../helpers';
import { FaEdit, FaRegMinusSquare } from 'react-icons/fa';
import { useGlobalContext } from '../../context';

const AssetRow = ({ asset }) => {
  const {
    removeAsset,
    coinInfo,
    openModal,
    openEditAsset,
    setActiveCoin,
  } = useGlobalContext();

  const [correctCoin] = coinInfo.filter((coin) => coin.id === asset.id);

  const {
    name,
    image,
    symbol,
    current_price: price,
    price_change_percentage_24h: changePercentage,
    price_change_24h: changeValue,
    id,
  } = correctCoin;

  const formattedPrice = usePriceFormatter(price);
  const formattedHoldings = usePriceFormatter(price * asset.holdings);
  const formattedProfit = usePriceFormatter(changeValue * asset.holdings);

  if (!asset) return null;

  return (
    <tr>
      <td className="table-name">
        <img src={image} alt={name} />
        <p>
          {name} <br /> <span className="symbol">{symbol}</span>
        </p>
      </td>
      {/**PRICE */}
      <td>{formattedPrice}</td>
      {/**PRICE CHANGE % */}
      <td
        className={
          changePercentage > 0
            ? 'positive percentage-change-row'
            : 'negative percentage-change-row'
        }
      >
        {priceChangeFormatter(changePercentage)}
      </td>
      {/**HOLDINGS */}
      <td className="holdings-row">
        {formattedHoldings} <br />
        <span className="holdings">
          {asset.holdings.toFixed(4)}
          <span className="symbol">&nbsp;{symbol}</span>
        </span>
      </td>
      {/**PROFIT/LOSS */}
      <td
        className={
          changeValue > 0 ? 'profit-row positive' : 'profit-row negative'
        }
      >
        {formattedProfit}
      </td>
      {/**ACTIONS */}
      <td className="actions-row">
        <button
          type="button"
          className="edit-btn"
          onClick={() => {
            setActiveCoin(id);
            openModal();
            openEditAsset();
          }}
        >
          <FaEdit className="icons" title="Edit transaction" />
        </button>
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeAsset(asset.id)}
        >
          <FaRegMinusSquare className="icons" title="Remove transaction" />
        </button>
      </td>
    </tr>
  );
};

export default AssetRow;
