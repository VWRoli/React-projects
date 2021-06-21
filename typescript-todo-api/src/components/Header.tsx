interface Props {
  setShowAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
  showAddTodo: boolean;
}

const Header: React.FC<Props> = ({ setShowAddTodo, showAddTodo }) => {
  return (
    <header className="header">
      <h1>Typescript Todo</h1>
      <button
        className="btn"
        onClick={() => setShowAddTodo(!showAddTodo)}
        style={
          showAddTodo
            ? { backgroundColor: 'red' }
            : { backgroundColor: 'green' }
        }>
        {showAddTodo ? 'Close' : 'Open'}
      </button>
    </header>
  );
};

export default Header;
