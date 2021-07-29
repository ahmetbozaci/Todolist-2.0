/**
 * @jest-environment jsdom
 */

import editToDo from '../__mocks__/mockEditToDo.js';

describe('editToDo', () => {
  const tasks = [
    {
      index: 1,
      description: 'Task 1',
      completed: false,
    },
    {
      index: 2,
      description: 'Task 2',
      completed: true,
    },
    {
      index: 3,
      description: 'Task 3',
      completed: false,
    },
  ];

  it('should check if a task editable', () => {
    expect(editToDo(tasks, 0, 'Finish project')).toEqual([
      { completed: false, description: 'Finish project', index: 1 },
      { completed: true, description: 'Task 2', index: 2 },
      { completed: false, description: 'Task 3', index: 3 },
    ]);
  });

  it('Array length shouldnt change', () => {
    expect(tasks.length).toBe(3);
  });
});
