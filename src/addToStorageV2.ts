
import Task from "./types";

const addToStorage = (tasks: Task[]) => localStorage.setItem('items', JSON.stringify(tasks));
export default addToStorage;