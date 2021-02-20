import ListItem from './ListItem';
import { FaExclamationTriangle } from 'react-icons/fa';

function List({ items, onDelete }) {
  return (
    <section className="list-wrapper">
      {items.length > 0 ? (
        items.map((item) => (
          <ListItem key={item.id} item={item} onDelete={onDelete} />
        ))
      ) : (
        <>
          <FaExclamationTriangle className="fa-excl" />
          <p className="empty-list">
            No items in your collection. Please add your items.
          </p>
        </>
      )}
    </section>
  );
}

export default List;
