import { tempData } from '../../tempData';
import { priceFormatter, priceChangeFormatter } from '../../helpers';

const EditAsset = () => {
  const {
    name,
    symbol,
    current_price,
    holdings,
    price_change_percentage_24h,
    image,
  } = tempData[0];

  return (
    <div id="edit-asset">
      <h1>Edit Asset</h1>
      <header>
        <img src={image} alt={name} />

        <h2>
          {name} <span>{symbol}</span>
        </h2>

        <p
          className={price_change_percentage_24h > 0 ? 'positive' : 'negative'}
        >
          {priceChangeFormatter(price_change_percentage_24h)}
        </p>
      </header>
      <h3>
        Current Price: <span>{priceFormatter(current_price)}</span>
      </h3>
      <form action="/">
        <label htmlFor="holdings">Quantity: </label>
        <input
          type="text"
          name="holdings"
          id="holdings"
          placeholder={holdings}
        />
        <button type="submit" className="save-changes-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditAsset;
