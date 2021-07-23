/* eslint-disable no-restricted-globals */
const deleteCompletedTodoItem = (tasks) => {
  const clearAll = document.getElementsByClassName('clearAll');
  clearAll[0].addEventListener('click', () => {
    function finish(el) {
      return !el.completed === true;
    }
    tasks = tasks.filter(finish);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i;
    }
    localStorage.setItem('items', JSON.stringify(tasks));
    location.reload();
  });
};

const deleteOnlyOne = (tasks) => {
  const trashIcon = document.querySelectorAll('.fa-trash-alt');

  trashIcon.forEach((icon) => icon.addEventListener('click', () => {
    const { id } = icon.parentNode.id;

    tasks.splice(id, 1);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i;
    }

    localStorage.setItem('items', JSON.stringify(tasks));
    location.reload();
  }));
};

export { deleteCompletedTodoItem, deleteOnlyOne };
/* eslint-enable no-restricted-globals */