import { FaPlus } from 'react-icons/fa';

const ListItem = ({ coin }) => {
  const { name, symbol, image } = coin;
  return (
    <article className="list-item">
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
      <h2>
        {name} <br />
        <span>{symbol}</span>
      </h2>
      <button type="button" className="add-btn">
        <FaPlus />
      </button>
    </article>
  );
};

export default ListItem;
