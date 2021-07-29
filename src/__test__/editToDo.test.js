/**
 * @jest-environment jsdom
 */

import { expect, it } from '@jest/globals';
import { describe } from 'yargs'
import editToDo from '../__mocks__/mockEditToDo.js'

describe ('editToDo', () => {
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
    expect(tasks)
  });
});