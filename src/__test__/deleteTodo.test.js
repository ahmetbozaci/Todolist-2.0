/**
 * @jest-environment jsdom
 */

import deleteCompletedTodoItem from "../__mocks__/mockDeleteTodo";

describe('deleteTodo', () => {
  const tasks = [{
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
    expect(deleteCompletedTodoItem(tasks)).toHaveLength(2)
  });
  // it('filter should identify tasks which are completed', () => {
  //   expect(tasks).toBe(1)
  // });
})