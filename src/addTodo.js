const addTodoTextToBox = (tasks, createList) => {
  const inputText = document.getElementById('input-text');
  inputText.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      const newItem = {
        index: parseInt(`${tasks.length}`),
        description: `${inputText.value}`,
        completed: false,
      };
      //createList(newItem);
      tasks.push(newItem);
      localStorage.setItem('items', JSON.stringify(tasks));
      location.reload()
    }
  });
};

export default addTodoTextToBox;