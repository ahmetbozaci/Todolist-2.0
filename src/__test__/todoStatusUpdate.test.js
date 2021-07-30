import todoStatusUpdate from '../__mocks__/mocktodoStatusUpdate.js';
import localStorageMock from '../__mocks__/mockLocalStorage.js';

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

describe('Status Update', () => {
  it('Completed task value should be true', () => {
    expect(todoStatusUpdate(tasks, 0)[0].completed).toBe(true);
  });

  it('Completed task value should be true', () => {
    expect(todoStatusUpdate(tasks, 1)[1].completed).toBe(true);
  });

  it('Completed task value should be true', () => {
    expect(todoStatusUpdate(tasks, 2)[2].completed).toBe(true);
  });

  it('Local storage should update after status update', () => {
    expect(localStorageMock.getItem('data')[2].completed).toBe(true);
  });

  it('Completed task value should be true', () => {
    expect(todoStatusUpdate(tasks, 3)[3].completed).toBe(false);
  });
});
