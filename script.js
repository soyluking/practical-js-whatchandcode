var todoList = {
  todos: [],
  displayTodos: function() {
    if ( this.todos.length === 0 ) {
      console.log('Your todo list is empty!');
    }
    else {
      console.log('My ToDo\'s:');

      for ( var i = 0; i < this.todos.length; i++ ) {
        if ( this.todos[i].completed ) {
          console.log('(x)', this.todos[i].todoText);
        }
        else {
          console.log('( )', this.todos[i].todoText);
        }
      }
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
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var completedTodos = 0;
    var totalTodos = this.todos.length;

    // Get number of completed todos
    for ( var i = 0; i < totalTodos; i++ ) {
      if ( this.todos[i].completed ) {
        completedTodos++;
      }
    }

    for ( var i = 0; i < totalTodos; i++ ) {
      if ( completedTodos === totalTodos ) {
        this.todos[i].completed = false;
      }
      else {
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  }
};

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};
