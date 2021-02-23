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
    <div className="book">
      <article>
        <div className="img-container">
          <img src={img} alt={title} />
        </div>

        <h2 className="title">{title}</h2>
        <div className="rank">
          <p># {rank}</p>
          <p>{weeks} Weeks</p>
        </div>
        <p className="author">{author}</p>

        <p className="description">{description}</p>
        <a href={link} target="_blank">
          View on Amazon
        </a>
      </article>
    </div>
  );
};

export default Book;
