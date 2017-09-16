import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class TodoService {

    constructor(private http: Http) { }

    getTodos() {
        return this.http
            .get('...')
            .map(response => response.json());
    }

    addTodo(todo) {
        return this.http
            .post('...', todo)
            .map(response => response.json());
    }

    deleteTodo(id) {
        return this.http
            .delete('...')
            .map(response => response.json());
    }
}
