/** @format */

const deleteCompletedTodoItem = (tasks) => {
  function finished(todo) {
    return todo.completed === false;
  }

  tasks = tasks.filter(finished);
  tasks.forEach((task, index) => {
    task.index = index;
  });
  return tasks;
};

const deleteOnlyOne = (tasks, index) => {
  tasks.splice(index, 1);
  tasks.forEach((task, index) => {
    task.index = index;
  });
  return tasks;
};

export { deleteCompletedTodoItem, deleteOnlyOne };
