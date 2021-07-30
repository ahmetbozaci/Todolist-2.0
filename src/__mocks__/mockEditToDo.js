import localStorageMock from './mockLocalStorage.js';

const editTodo = (tasks, index, text) => {
  tasks[index].description = text;
  localStorageMock.setItem('data', tasks);
  return tasks;
};

export default editTodo;
