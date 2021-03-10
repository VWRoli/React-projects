import { priceChangeFormatter, priceFormatter } from '../../helpers';
import { FaEdit, FaRegMinusSquare } from 'react-icons/fa';

const AssetRow = ({ coin }) => {
  const {
    name,
    image,
    symbol,
    current_price: price,
    price_change_percentage_24h: changePercentage,
    price_change_24h: changeValue,
  } = coin;

  return (
    <tr>
      <td className="table-name">
        <img src={image} alt={name} />
        <p>
          {name} <br /> <span>{symbol}</span>
        </p>
      </td>
      <td>{priceFormatter(price)}</td>
      <td
        className={
          changePercentage > 0
            ? 'positive percentage-change-row'
            : 'negative percentage-change-row'
        }
      >
        {priceChangeFormatter(changePercentage)}
      </td>
      <td>{priceFormatter(price)}</td>
      <td
        className={
          changeValue > 0 ? 'profit-row positive' : 'profit-row negative'
        }
      >
        {priceFormatter(changeValue)}
      </td>
      <td className="actions-row">
        <FaEdit className="icons" title="Edit transaction" />
        <FaRegMinusSquare className="icons" title="Remove transaction" />
      </td>
    </tr>
  );
};

export default AssetRow;
