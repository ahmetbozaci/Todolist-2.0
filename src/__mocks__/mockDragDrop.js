/** @format */

function dragDrop(tasks, index1, index2) {
  [tasks[index1], tasks[index2]] = [tasks[index2], tasks[index1]];
  [tasks[index1].index, tasks[index2].index] = [
    tasks[index2].index,
    tasks[index1].index,
  ];
  return tasks;
}

export default dragDrop;
