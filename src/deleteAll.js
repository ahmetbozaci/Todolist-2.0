const deleteCompletedTodoItem = (tasks) => {
  const clearAll = document.getElementsByClassName('clearAll');
  clearAll[0].addEventListener('click', function () {
    function finish(el) {
      return !el.completed == true;
    }
    tasks = tasks.filter(finish)
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].index = i;
    }
    localStorage.setItem('items', JSON.stringify(tasks));
    location.reload();
  });
};

export default deleteCompletedTodoItem;
