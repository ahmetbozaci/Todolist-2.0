import addToStorageV2 from './addToStorageV2';
import Task from './types';
import { getElementById } from './Utils';

const inputText = getElementById('input-text');
const addTodoTextToBox = (tasks: Task[]) => {

  inputText.addEventListener('keyup', (event) => {

    const newItem: Task = {
      index: +tasks.length,
      description: inputText.value,
      completed: false,
    };

    if (event.keyCode === 13) {
      tasks.push(newItem);
      addToStorageV2(tasks);
      inputText.value = '';
      location.reload();
    }
  })
}

export default addTodoTextToBox;
