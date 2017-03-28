var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My ToDo\'s:', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position].completed;
    console.log('1',todo);
    todo = !todo;
    console.log('2',todo);
    this.displayTodos();
  }
};
