/* eslint-disable no-unused-vars */
import addToStorage from './addToStorage.js';

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll('.item:not(.dragging)'),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    },
  ).element;
}

function dragDrop(tasks) {
  const todoAppContainer = document.getElementById('todoAppContainer');
  const items = document.querySelectorAll('.item');

  items.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');

      const todoItemsDiv = document.querySelectorAll('.item');
      for (let i = 0; i < todoItemsDiv.length; i += 1) {
        tasks[(todoItemsDiv[i].id)].index = i;
        todoItemsDiv[i].id = i;
      }

      tasks = tasks.sort((a, b) => (a.index - b.index));
      addToStorage(tasks);
    });
  });

  todoAppContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    const currentDraggable = document.querySelector('.dragging');
    const afterElement = getDragAfterElement(todoAppContainer, e.clientY);
    if (afterElement == null) {
      todoAppContainer.appendChild(currentDraggable);
    } else {
      todoAppContainer.insertBefore(currentDraggable, afterElement);
    }
  });
}

export default dragDrop;
/* eslint-enable no-unused-vars, no-use-before-define */
