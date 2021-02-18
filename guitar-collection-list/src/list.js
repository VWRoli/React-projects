export const ListItem = (props) => {
  const { id, img, title } = props;
  return (
    <article className="list-item">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="list-content">
        <h2 className="title">{title}</h2>
        <div className="acquired-container">
          <input type="checkbox" id="acquired" name="acquired" value=""></input>
          <label htmlFor="acquired">Acquired</label>
        </div>
        <button type="button" className="btn-remove">
          Remove
        </button>
      </div>
    </article>
  );
};
