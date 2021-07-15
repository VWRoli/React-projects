const Button = ({ link, labelText, type }) => {
  return (
    <a href={link} target="_blank" className={`${type}-btn`}>
      {labelText}
    </a>
  );
};

export default Button;
