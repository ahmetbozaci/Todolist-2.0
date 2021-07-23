/* eslint-disable no-restricted-globals, prefer-destructuring */
import './style.css';
import todoStatusUpdate from './todoStatusUpdate.js';
import dragDrop from './dragDrop.js';
import deleteCompletedTodoItem from './deleteAll.js';
import addTodo from './addTodo.js';

const tasks = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

localStorage.setItem('items', JSON.stringify(tasks));
const data = JSON.parse(localStorage.getItem('items'));

const createList = (todoItem) => {
  if (!todoItem) {
    return;
  }

  const todoAppContainer = document.getElementById('todoAppContainer');

  const todoItemElement = document.createElement('div');
  todoItemElement.classList.add('item', 'borderBottom', 'draggable');
  todoItemElement.id = todoItem.index;
  todoItemElement.setAttribute('draggable', true);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todoItem.completed;

  const descriptionSpan = document.createElement('span');
  descriptionSpan.classList.add('text');

  if (todoItem.completed) {
    descriptionSpan.classList.add('check');
  }

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-trash-alt');
  todoAppContainer.appendChild(todoItemElement);
  descriptionSpan.innerHTML = todoItem.description;
  todoItemElement.append(checkbox, descriptionSpan, icon);
  dragDrop(tasks);
  todoStatusUpdate(tasks);
};

addTodo(tasks);
deleteCompletedTodoItem(tasks);

data.forEach((object) => {
  createList(object);
});

const deleteOne = (tasks) => {
  const trashIcon = document.querySelectorAll('.fa-trash-alt');

  trashIcon.forEach((icon) => icon.addEventListener('click', () => {
    const id = icon.parentNode.id;

    tasks.splice(id, 1);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i;
    }

    localStorage.setItem('items', JSON.stringify(tasks));
    location.reload();
  }));
};

deleteOne(tasks);

const edit = (tasks) => {
  const todoTextSpan = document.querySelectorAll('.text');

  todoTextSpan.forEach((span) => {
    span.contentEditable = true;
  });

  for (let i = 0; i < todoTextSpan.length; i += 1) {
    todoTextSpan[i].addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        tasks[i].description = todoTextSpan[i].textContent;
        localStorage.setItem('items', JSON.stringify(tasks));
      }
    });
  }
};
edit(tasks);
/* eslint-enable no-restricted-globals, prefer-destructuring */