import ListItem from './ListItem';

function List({ collection }) {
  return (
    <section className="list-wrapper">
      {collection.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </section>
  );
}

export default List;
