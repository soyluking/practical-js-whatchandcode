var todoList = {
  todos: [],
  displayTodos: function() {
    if ( this.todos.length ) {
      console.log('My ToDo\'s:');

      for (var i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].todoText + ', Completed: ' + this.todos[i].completed);
      }
    }
    else {
      console.log('You don\'t have todo yet');
    }
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
