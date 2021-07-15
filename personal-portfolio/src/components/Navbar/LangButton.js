const LangButton = ({ flag, handleClick }) => {
  return (
    <button className="lang-btn" onClick={handleClick}>
      <img src={flag} alt="Flag" />
    </button>
  );
};

export default LangButton;
