const deleteCompletedTodoItem = (tasks) => {
 
    function finished(todo) {
      return todo.completed === false;
    }
    tasks = tasks.filter(finished);
    tasks.forEach((task, index) => { task.index = index; });
};

export default deleteCompletedTodoItem;