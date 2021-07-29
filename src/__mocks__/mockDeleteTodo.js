const deleteCompletedTodoItem = (tasks) => {
 
    function finished(todo) {
      return todo.completed === false;
    }

    tasks = tasks.filter(finished);
    tasks.forEach((task, index) => { task.index = index; });
    return tasks
};

const deleteOnlyOne = (tasks) => {
  document.body.innerHTML = '<div id="1"><input type="checkbox"><span class="text">first</span> const trashIcon = document.querySelectorAll('.fa-trash-alt')</div>';
  const icon = document.querySelectorAll('#1 trashIcon');
  const todoItem = icon.parentNode;
    tasks.splice(todoItem.id, 1);
    tasks.forEach((task, index) => { task.index = index; });

    return tasks
};

export {deleteCompletedTodoItem, deleteOnlyOne};
