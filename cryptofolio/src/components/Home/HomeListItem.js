const HomeListItem = ({ coin }) => {
  const { name, symbol, image } = coin;
  return (
    <article>
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
      <h2>
        {name} <br />
        <span>{symbol}</span>
      </h2>
    </article>
  );
};

export default HomeListItem;
