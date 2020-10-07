angular.module("app", [])
    .controller('todoController', function() 
    {
        var todoList = this;

        todoList.todos = []

        todoList.addTodo = function () 
        {
            
            todoList.todos.push({ text: todoList.todoText, done: false });
            todoList.todoText = '';
        };

        todoList.completed = function()
        {   
            var count = 0;

            angular.forEach(todoList.todos, todo =>
                {
                    count += todo.done ? 1 : 0;
                })

            return count;
        }

        todoList.archive = function()
        {
           
            var oldsTodo = todoList.todos;

            todoList.todos = [];

            angular.forEach(oldsTodo, todo =>
                {
                    if (!todo.done) todoList.todos.push(todo);
                })

        }
    });