const LangButton = ({ flag, handleClick, isActive }) => {
  return (
    <button
      className="lang-btn"
      onClick={handleClick}
      style={{
        opacity: !isActive ? '0.5' : '1',
        pointerEvents: isActive ? 'none' : 'auto',
      }}
    >
      <img src={flag} alt="Flag" />
    </button>
  );
};

export default LangButton;
