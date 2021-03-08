import { FaExpand } from 'react-icons/fa';

const Image = ({ imageData }) => {
  const { date, url, title, copyright } = imageData;
  return (
    <article className="image-wrapper">
      <h2 className="date">{date}</h2>
      <div className="img-controls">
        <h3 className="title">
          {title} <br />
          <span className="copyright">{copyright}</span>
        </h3>
        <a href={url}>
          <FaExpand className="icon" />
        </a>
      </div>
      <img src={url} alt={title} />
    </article>
  );
};

export default Image;
