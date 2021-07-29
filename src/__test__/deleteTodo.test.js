/**
 * @jest-environment jsdom
 */

import {deleteCompletedTodoItem, deleteOnlyOne} from "../__mocks__/mockDeleteTodo";

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

  it('Index of task 0 should be 1', () => {
    expect(deleteCompletedTodoItem(tasks)[0].index).toBe(0)
  });
})




describe('deleteOnlyOne', () => {
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

  it('should delete only one tasks from array', () => {
    expect(deleteOnlyOne(tasks)).toHaveLength(2)
  })
})