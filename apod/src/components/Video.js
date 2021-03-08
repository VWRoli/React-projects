const Image = ({ imageData }) => {
  const { date, url, title } = imageData;

  return (
    <article className="video-wrapper">
      <h2 className="title">{date}</h2>
      <iframe
        className="video"
        src={url}
        frameBorder="0"
        title={title}
        allowFullScreen
        allow="autoplay; encrypted-media"
      />
    </article>
  );
};

export default Image;
