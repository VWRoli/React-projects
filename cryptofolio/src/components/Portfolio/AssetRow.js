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
      <td className={changePercentage > 0 ? 'positive' : 'negative'}>
        {priceChangeFormatter(changePercentage)}
      </td>
      <td>{priceFormatter(price)}</td>
      <td className={changeValue > 0 ? 'positive' : 'negative'}>
        {priceFormatter(changeValue)}
      </td>
      <td>
        <FaEdit className="icons" />
        <FaRegMinusSquare className="icons" />
      </td>
    </tr>
  );
};

export default AssetRow;
