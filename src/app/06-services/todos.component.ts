import { OnInit } from '@angular/core';
import { TodoService } from './todo.service';

export class TodosComponent {

    todos: any[] = [];
    message;

    constructor(private service: TodoService) {

    }

    ngOnInit() {
        this.service
            .getTodos()
            .subscribe(todos => this.todos = todos);
    }

    add() {
        const newTodo = { 'title': '...' };
        this.service.addTodo(newTodo)
            .subscribe(
                todo => {
                    this.todos = this.todos.concat(todo);
                },
                err => {
                    this.message = err;
                }
            );
    }

    delete(id) {
        if (confirm('Are you sure?')) {
            this.service.deleteTodo(id).subscribe();
        }
    }
}
