import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {

    let component: TodosComponent;
    let service: TodoService;

    beforeEach(() => {
        service = new TodoService(null);
        component = new TodosComponent(service);
    });

    it('should set todos property with the items returned from the server', () => {

    });

    it('should call the server to save the changes when a new todo item is added', () => {

    });

    it('should add the new todo returned from the server', () => {

    });

    it('should set the message property if server returns an error when adding a new todo', () => {

    });

    it('should call the server to delete a todo item if the user confirms', () => {

    });

    it('should NOT call the server to delete a todo item if the user cancels', () => {

    });


});
