const Book = ({ book }) => {
  const {
    rank,
    book_image: img,
    title,
    author,
    weeks_on_list: weeks,
    description,
    amazon_product_url: link,
  } = book;
  return (
    <div>
      <article>
        <div className="img-container">
          <img src={img} alt={title} />
        </div>
        <div className="info">
          <h2>{title}</h2>
          <p>{rank}</p>
          <p>{author}</p>
          <p>{weeks}</p>
        </div>
        <p className="description">{description}</p>
        <a href={link}>View on Amazon</a>
      </article>
    </div>
  );
};

export default Book;

/* 
function Book({ book })=> {
  
  return (
   
    /* <article>
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <p>{rank}</p>
        <p>{author}</p>
        <p>{weeks}</p>
      </div>
      <p className="description">{description}</p>
      <a href={link}>View on Amazon</a>
    </article> 
  );
}*/
