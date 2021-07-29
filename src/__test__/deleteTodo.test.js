/**
 * @jest-environment jsdom
 */

import deleteCompletedTodoItem from "../__mocks__/mockDeleteTodo";

describe('deleteTodo', () => {
  const task = [{
    index: 1,
    description: "Task 1",
    completed: false,
  },
  {
    index: 2,
    description: "Task 2",
    completed: true,
  },
  {
    index: 3,
    description: "Task 3",
    completed: false,
  }]

  it('Should delete tasks which are completed', () => {
    expect(deleteCompletedTodoItem(task)).toHaveLength(2)
  });
    deleteCompletedTodoItem(task)
  it('filter should identify tasks which are completed', () => {
    expect(task).toBe(1)
  });
})