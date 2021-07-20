export default function move() {
  const container = document.documentElementById('container');
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    item.addEventListener('dragstart', () => {
      item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging')
    });
  });

  container.addEventListener('dragover', () => {
    console.log('drag over')
  })

}