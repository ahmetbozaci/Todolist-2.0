export default function todoStatusUpdate(tasks) {
  const checkbox = document.querySelectorAll('input[type=checkbox]');
  const descriptionSpans = document.getElementsByClassName('text');

  for (let i = 0; i < checkbox.length; i += 1) {

    checkbox[i].addEventListener('click', () => {
      if (checkbox[i].checked) {
        tasks[i].completed = true;
        descriptionSpans[i].classList.add('check');
        localStorage.setItem('items', JSON.stringify(tasks));

      } else {
        tasks[i].completed = false;
        descriptionSpans[i].classList.remove('check');
        localStorage.setItem('items', JSON.stringify(tasks));
      }
    });
  }
}
