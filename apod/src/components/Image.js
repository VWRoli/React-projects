import { FaExpand } from 'react-icons/fa';

const Image = ({ imageData }) => {
  const { date, url, title, copyright } = imageData;
  return (
    <article className="image-wrapper">
      <h2 className="title">{date}</h2>
      <div className="img-controls">
        <FaExpand className="icon" />
      </div>
      <img src={url} alt={title} />
    </article>
  );
};

export default Image;
