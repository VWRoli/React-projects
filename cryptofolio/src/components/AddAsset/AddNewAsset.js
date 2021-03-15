import { priceChangeFormatter, priceFormatter } from '../../helpers';
import { useFetch } from '../../useFetch';

const AddNewAsset = ({ id }) => {
  //todo loads list without ID, should only load if id is present
  const { data, isLoading } = useFetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`
  );
  if (!data[0]) return null;

  const {
    name,
    image,
    symbol,
    price_change_percentage_24h,
    current_price,
  } = data[0];

  return (
    <div id="add-new-asset">
      <h1>Add New Asset</h1>

      <header>
        <img src={image} alt={name} />

        <h2>
          {name} <span>{symbol}</span>
        </h2>

        <p>
          24h:{' '}
          <span
            className={
              price_change_percentage_24h > 0 ? 'positive' : 'negative'
            }
          >
            {priceChangeFormatter(price_change_percentage_24h)}
          </span>
        </p>
      </header>
      <h3>
        Current Price: <span>{priceFormatter(current_price)}</span>
      </h3>
      <form action="/">
        <label htmlFor="holdings">Quantity: </label>
        <input type="text" name="holdings" id="holdings" />
        <button type="submit" className="btn">
          Add Asset
        </button>
      </form>
    </div>
  );
};

export default AddNewAsset;
