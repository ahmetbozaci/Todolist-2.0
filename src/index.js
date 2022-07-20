import './style.css';
import todoStatusUpdate from './todoStatusUpdate.js';
import dragDrop from './dragDrop.js';
import { deleteOnlyOne, deleteCompletedTodoItem } from './deleteTodo.js';
import addTodoV2 from './addTodoV2.js';
import addToStorageV2 from './addToStorageV2.js';
import editTodo from './editTodo.js';

const tasks = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

addToStorageV2(tasks);
const data = JSON.parse(localStorage.getItem('items'));

const createList = (todoItem) => {
  if (!todoItem) return;

  const todoAppContainer = document.getElementById('todoAppContainer');
  const todoItemElement = document.createElement('div');
  todoItemElement.classList.add('item', 'borderBottom');
  todoItemElement.id = todoItem.index;
  todoItemElement.setAttribute('draggable', true);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('pointer');
  checkbox.checked = todoItem.completed;

  const descriptionSpan = document.createElement('span');
  descriptionSpan.classList.add('text');

  if (todoItem.completed) descriptionSpan.classList.add('check');

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-trash-alt', 'pointer');

  todoAppContainer.appendChild(todoItemElement);
  descriptionSpan.innerHTML = todoItem.description;
  todoItemElement.append(checkbox, descriptionSpan, icon);
};

data.forEach((todoObject) => {
  createList(todoObject);
});

todoStatusUpdate(tasks);
deleteCompletedTodoItem(tasks);
deleteOnlyOne(tasks);
addTodoV2(tasks);
dragDrop(tasks);
editTodo(tasks);
