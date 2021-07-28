/**
 * @jest-environment jsdom
 */

import addTodo from '../__mocks__/mockAddTodo';

describe('addTodo', () => {
  document.body.innerHTML = '<input id="input-text" value="Learn webpack">'
  const inputText = document.getElementById('input-text');
  const tasks = [];
  it('Should return task array with attached todo object', () => {
    expect(addTodo(tasks)).toBe(tasks)
  });
})