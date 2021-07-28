import addToStorage from './addToStorage.js';

export default function todoStatusUpdate(tasks) {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const descriptionSpans = document.getElementsByClassName('text');

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        tasks[index].completed = true;
        descriptionSpans[index].classList.add('check');
        addToStorage(tasks);
      } else {
        tasks[index].completed = false;
        descriptionSpans[index].classList.remove('check');
        addToStorage(tasks);
      }
    });
  });
}
