interface Props {
  setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
  showAddTask: boolean;
}

const Header: React.FC<Props> = ({ setShowAddTask, showAddTask }) => {
  return (
    <header className="header">
      <h1>Typescript Task Manager</h1>
      <button
        className="btn"
        onClick={() => setShowAddTask(!showAddTask)}
        style={
          showAddTask
            ? { backgroundColor: 'red' }
            : { backgroundColor: 'green' }
        }>
        {showAddTask ? 'Close' : 'Open'}
      </button>
    </header>
  );
};

export default Header;
