const AddNewTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input type="text" name="task" placeholder="Add task" />
      </div>
      <div className="form-control">
        <label htmlFor="date">Date & Time</label>
        <input type="text" name="date" placeholder="Add Date & Time" />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set reminder</label>
        <input type="checkbox" name="reminder" placeholder="Add Date & Time" />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddNewTask;
