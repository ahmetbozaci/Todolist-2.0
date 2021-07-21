/** @format */

export default function dragDrop() {
  const todoAppContainer = document.querySelectorAll('.todoAppContainer');
  const draggables = document.querySelectorAll('.draggable');
  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });
}

// todoAppContainer.addEventListener('dragover', (e) => {
//   e.preventDefault()
//   const currentDraggable = document.querySelector('.dragging');
//   const afterElement = getDragAfterElement(todoAppContainer, e.clientY);
//   if (afterElement == null) {
//     todoAppContainer.appendChild(currentDraggable)
//   } else {
//     todoAppContainer.insertBefore(currentDraggable, afterElement)
//   }
// });

//   todoAppContainer[0].addEventListener('dragover', () => {
//     const draggable = document.querySelector('.dragging')
//     todoAppContainer[0].appendChild(draggable)
//   })
// }

// function getDragAfterElement(container,y) {
//   const draggableElements = [...container.querySelectorAll('.item:not(.dragging)')];
//   return draggableElements.reduce(
//     (closest, child) => {
//       const box = child.getBoundingClientRect();
//       const offset = y - box.top -box.height / 2;
//       if (offset < 0 && offset > closest.offset) {
//         return { offset, element: child};
//       }
//       return closest;
//     },
//     {
//       offset: Number.NEGATIVE_INFINITY,
//     },
//   ).element;
// }

// export default function dragDrop() {
//   alert('hello')
// }
