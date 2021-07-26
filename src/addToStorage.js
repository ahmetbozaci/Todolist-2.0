const addToStorage = (tasks) => localStorage.setItem('items', JSON.stringify(tasks));
export default addToStorage;