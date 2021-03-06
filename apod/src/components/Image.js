const Image = ({ imageData }) => {
  const { date, url, title } = imageData;
  return (
    <article className="image-wrapper">
      <img src={url} alt={title} />
      <span>{date}</span>
    </article>
  );
};

export default Image;
