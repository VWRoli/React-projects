import { useState } from 'react';
import { useGlobalContext } from '../../context';
import { priceChangeFormatter, priceFormatter } from '../../helpers';
import { useFetch } from '../../useFetch';
import Loading from '../Loading';

const AddNewAsset = ({ id }) => {
  //todo loads list without ID, should only load if id is present
  const { data, isLoading } = useFetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`
  );

  const { addAsset, closeModal } = useGlobalContext();
  const [holdings, setHoldings] = useState('');

  if (!data[0]) return null;

  const {
    name,
    image,
    symbol,
    price_change_percentage_24h,
    current_price,
  } = data[0];

  const onSubmit = (e) => {
    e.preventDefault();

    //Handle unfilled input field
    if (!holdings) {
      e.target.querySelector('#holdings').placeholder =
        'Please fill out the field!';
      e.target.querySelector('#holdings').classList.add('input-error');
      return;
    }

    addAsset({ id, holdings: +holdings });
    setHoldings('');

    closeModal();
  };

  return (
    <div id="add-new-asset">
      <h1>Add New Asset</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
          <form action="/" onSubmit={onSubmit}>
            <label htmlFor="holdings">Quantity: </label>
            <input
              type="text"
              name="holdings"
              id="holdings"
              value={holdings}
              onChange={(e) => setHoldings(e.target.value)}
            />

            <button type="submit" className="primary-btn">
              Add Asset
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddNewAsset;
