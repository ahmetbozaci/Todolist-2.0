import addToStorage from './addToStorage.js';

const editTodo = (tasks) => {
  const todoTextSpan = document.querySelectorAll('.text');

  todoTextSpan.forEach((span) => {
    span.contentEditable = true;
  });

  todoTextSpan.forEach((span, index) => {
    span.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        tasks[index].description = span.textContent;
        addToStorage(tasks);
      }
    });
  });
};

export default editTodo;