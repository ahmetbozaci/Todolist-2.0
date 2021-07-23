/* eslint-disable no-restricted-globals */
import addToStorage from './addToStorage.js';

const deleteCompletedTodoItem = (tasks) => {
  const clearAll = document.getElementsByClassName('clearAll');
  clearAll[0].addEventListener('click', () => {
    function finish(todo) {
      return !todo.completed === true;
    }
    tasks = tasks.filter(finish);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i;
    }
    addToStorage(tasks);
    location.reload();
  });
};

const deleteOnlyOne = (tasks) => {
  const trashIcon = document.querySelectorAll('.fa-trash-alt');

  trashIcon.forEach((icon) => icon.addEventListener('click', () => {
    const todoItem = icon.parentNode;
    tasks.splice(todoItem.id, 1);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i;
    }

    addToStorage(tasks);
    location.reload();
  }));
};

export { deleteCompletedTodoItem, deleteOnlyOne };
/* eslint-enable no-restricted-globals */