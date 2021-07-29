const editTodo = (tasks) => {

  todoTextSpan.forEach((span) => {
    span.contentEditable = true;
  });

  todoTextSpan.forEach((span, index) => {
        tasks[index].description = span.textContent;
  });
};

export default editTodo;