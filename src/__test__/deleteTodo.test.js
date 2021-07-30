import {
  deleteCompletedTodoItem,
  deleteOnlyOne,
} from '../__mocks__/mockDeleteTodo.js';
import localStorageMock from '../__mocks__/mockLocalStorage.js';

describe('deleteTodo', () => {
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
      completed: true,
    },
    {
      index: 4,
      description: 'Task 4',
      completed: false,
    },
  ];

  it('Should delete tasks which are completed', () => {
    expect(deleteCompletedTodoItem(tasks)).toHaveLength(2);
  });

  it('Local storage should update after delete', () => {
    expect(localStorageMock.getItem('data')[1].description).toBe('Task 4');
  });

  it('Local storage should update after delete', () => {
    expect(localStorageMock.getItem('data')[1].index).toBe(1);
  });

  it('Index of task 0 should be 1', () => {
    expect(deleteCompletedTodoItem(tasks)[0].index).toBe(0);
  });
});

describe('deleteOnlyOne', () => {
  const tasks = [
    {
      index: 0,
      description: 'Task 1',
      completed: false,
    },
    {
      index: 1,
      description: 'Task 2',
      completed: true,
    },
    {
      index: 2,
      description: 'Task 3',
      completed: false,
    },
  ];

  it('should delete only one tasks from array', () => {
    expect(deleteOnlyOne(tasks, 2)).toHaveLength(2);
  });

  it('Local storage should update after delete', () => {
    expect(localStorageMock.getItem('data')).toHaveLength(2);
  });

  it('Local storage should update after delete', () => {
    expect(localStorageMock.getItem('data')).toBe(tasks);
  });

  it('Index should update after delete one item', () => {
    expect(tasks[1].index).toBe(1);
  });

  it('Should return update array', () => {
    expect(deleteOnlyOne(tasks, 0)).toEqual([{
      index: 0,
      description: 'Task 2',
      completed: true,
    }]);
  });
});
