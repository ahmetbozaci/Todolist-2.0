
import localStorageMock from '../__mocks__/mockLocalStorage'

describe('storage', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  it('saves the key to the storage', () => {
    saveToStorage('fake-value');

    expect(window.localStorage.getItem('the-key')).toEqual('fake-value');
  });
});