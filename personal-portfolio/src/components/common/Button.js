const Button = ({ link, labelText, type }) => {
  return (
    <a href={link} target="_blank" className={`${type}-btn`} rel="noreferrer">
      {labelText}
    </a>
  );
};

export default Button;
