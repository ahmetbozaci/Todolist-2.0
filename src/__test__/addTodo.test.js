/**
 * @jest-environment jsdom
 */

import { it } from '@jest/globals';
import addTodo from '../__mocks__/mockAddTodo.js';
import mockLocalStorage from '../__mocks__/mockLocalStorage.js'

describe('addTodo', () => {
  document.body.innerHTML = '<input id="input-text" value="Learn webpack">';
  const tasks = [];

  it('Should return task array with attached todo object', () => {
    expect(addTodo(tasks)).toHaveLength(1);
  });

  it('Should return task array with attached todo object', () => {
    expect(addTodo(tasks)).toHaveLength(2);
  });

  it('Description should have input value', () => {
    expect(tasks[0].description).toBe('Learn webpack');
  });

  it('Status should be false', () => {
    expect(tasks[0].completed).toBe(false);
  });

  it('Status should be false', () => {
    expect(tasks[1].index).toBe(1);
  });

  test('should add item to localStorage', () => {
    expect()
  })
 
});