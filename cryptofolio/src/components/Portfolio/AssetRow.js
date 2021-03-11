import { priceChangeFormatter, priceFormatter } from '../../helpers';
import { FaEdit, FaRegMinusSquare } from 'react-icons/fa';
import { useGlobalContext } from '../../context';

const AssetRow = ({ coin }) => {
  const { removeAsset } = useGlobalContext();

  const {
    name,
    image,
    symbol,
    current_price: price,
    price_change_percentage_24h: changePercentage,
    price_change_24h: changeValue,
    holdings,
    id,
  } = coin;

  return (
    <tr>
      <td className="table-name">
        <img src={image} alt={name} />
        <p>
          {name} <br /> <span className="symbol">{symbol}</span>
        </p>
      </td>
      {/**PRICE */}
      <td>{priceFormatter(price)}</td>
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
        {priceFormatter(price * holdings)} <br />
        <span className="holdings">
          {holdings.toFixed(4)}
          <span className="symbol">&nbsp;{symbol}</span>
        </span>
      </td>
      {/**PROFIT/LOSS */}
      <td
        className={
          changeValue > 0 ? 'profit-row positive' : 'profit-row negative'
        }
      >
        {priceFormatter(changeValue * holdings)}
      </td>
      {/**ACTIONS */}
      <td className="actions-row">
        <button type="button" className="edit-btn">
          <FaEdit className="icons" title="Edit transaction" />
        </button>
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeAsset(id)}
        >
          <FaRegMinusSquare className="icons" title="Remove transaction" />
        </button>
      </td>
    </tr>
  );
};

export default AssetRow;
