const ListItem = ({ item, onDelete }) => {
  return (
    <article className="list-item">
      <div className="img-container">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="list-content">
        <h2>{item.title}</h2>
        <div>
          <span
            style={
              item.guitar
                ? { background: '#c51837' }
                : { background: '#FFC62B' }
            }
          >
            {item.guitar ? `Guitar` : `Amp`}
          </span>

          <button onClick={() => onDelete(item.id)}>Remove</button>
        </div>
      </div>
    </article>
  );
};

export default ListItem;
