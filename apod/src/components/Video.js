const Image = ({ imageData }) => {
  const { url, title } = imageData;

  return (
    <article className="image-wrapper">
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
