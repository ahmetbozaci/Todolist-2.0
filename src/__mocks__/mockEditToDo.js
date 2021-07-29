const editTodo = (tasks, index, text) => {
  tasks[index].description = text;
  return tasks;
};

export default editTodo;
