import { useState } from 'react';

const Book = ({ book }) => {
  console.log(book);
  const {
    rank,
    book_image: img,
    title,
    author,
    weeks_on_list: weeks,
    description,
    amazon_product_url: link,
  } = book;
  const [readMore, setReadMore] = useState(false);

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

        <p className="description">
          {readMore ? description : `${description.substring(0, 75)}... `}
          <button
            className="toggle-readmore"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show Less' : 'Read more'}
          </button>
        </p>
        <a href={link} target="_blank" rel="noreferrer">
          View on Amazon
        </a>
      </article>
    </div>
  );
};

export default Book;
