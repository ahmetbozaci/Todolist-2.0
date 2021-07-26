/* eslint-disable no-restricted-globals */
import addToStorage from './addToStorage.js';

const deleteCompletedTodoItem = (tasks) => {
  const clearAllBtn = document.querySelector('.clearAllBtn');
  clearAllBtn.addEventListener('click', () => {
    function finished(todo) {
      return todo.completed === false;
    }

    tasks = tasks.filter(finished);
    tasks.forEach((task, index) => { task.index = index; });
    addToStorage(tasks);
    location.reload();
  });
};

const deleteOnlyOne = (tasks) => {
  const trashIcon = document.querySelectorAll('.fa-trash-alt');

  trashIcon.forEach((icon) => icon.addEventListener('click', () => {
    const todoItem = icon.parentNode;
    tasks.splice(todoItem.id, 1);
    tasks.forEach((task, index) => { task.index = index; });

    addToStorage(tasks);
    location.reload();
  }));
};

export { deleteCompletedTodoItem, deleteOnlyOne };
/* eslint-enable no-restricted-globals */