//import './style.css';
import statusUpdate from './statusUpdate.js';

const tasks = [
  { index: 0, description: 'Learn webpack', completed: false },
  { index: 1, description: 'Read 20 pages of book', completed: false },
  { index: 2, description: 'Create portfolio', completed: false },
];

const createList = (todo) => {
  const container = document.getElementById('container');
  const item = document.createElement('div');
  item.classList.add('item', 'border', 'draggable');
  item.setAttribute('draggable', true);
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  const span = document.createElement('span');
  span.classList.add('text');
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-ellipsis-v');
  if (todo !== undefined) {
    container.appendChild(item);
    span.innerHTML = todo;
    item.append(checkbox, span, icon);
  }
  statusUpdate(tasks)
};

tasks.forEach((item) => {
  createList(item.description);
});

