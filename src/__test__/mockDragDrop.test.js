/** @format */

import dragDrop from '../__mocks__/mockDragDrop.js';
import mockLocalStorage from '../__mocks__/mockLocalStorage.js'

describe('Drag Drop', () => {
  const tasks = [
    {
      index: 1,
      description: 'Task 1',
      completed: false,
    },
    {
      index: 2,
      description: 'Task 2',
      completed: false,
    },
    {
      index: 3,
      description: 'Task 3',
      completed: false,
    },
    {
      index: 4,
      description: 'Task 4',
      completed: true,
    },
  ];

  test('something', () => {
    expect(dragDrop(tasks, 1, 2)[2].description).toBe('Task 2');
  });

  test('something', () => {
    expect(tasks[1].description).toBe('Task 3');
  });

  test('something', () => {
    expect(dragDrop(tasks, 1, 3)[1].description).toBe('Task 4');
  });

  test('something', () => {
    expect(tasks[3].description).toBe('Task 3');
  });

 
});
