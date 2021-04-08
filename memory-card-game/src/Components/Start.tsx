type Props = {
  setGameOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Start: React.FC<Props> = ({ setGameOn }) => {
  return (
    <section className="start-page">
      <button className="btn start-btn" onClick={() => setGameOn(true)}>
        Start Game
      </button>
    </section>
  );
};

export default Start;
