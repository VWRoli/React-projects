import { FaPlus } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const ListItem = ({ coin }) => {
  const { openModal } = useGlobalContext();

  const { name, symbol, image, id } = coin;
  return (
    <article className="list-item" title={name}>
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
      <h2>
        {name.substring(0, 12)} <br />
        <span>{symbol}</span>
      </h2>
      <button type="button" className="add-btn" onClick={openModal}>
        <FaPlus />
      </button>
    </article>
  );
};

export default ListItem;
