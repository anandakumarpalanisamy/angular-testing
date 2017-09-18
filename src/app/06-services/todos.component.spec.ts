import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

describe('TodosComponent', () => {

    let component: TodosComponent;
    let service: TodoService;

    beforeEach(() => {
        // Arrange
        service = new TodoService(null);
        component = new TodosComponent(service);
    });

    it('should set todos property with the items returned from the server', () => {

        // Arrange
        const spy = spyOn(service, 'getTodos').and.returnValue(Observable.from([ [1, 2, 3] ]));

        // Act
        component.ngOnInit();

        // Assert
        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledTimes(1);
        expect(component.todos.length).toBe(3);
    });

    it('should call the server to save the changes when a new todo item is added', () => {

        // Arrange
        const spy = spyOn(service, 'addTodo').and.returnValue(Observable.of({title: '...'}));
        
        // ACt
        component.add();
    
        // Assert
        expect(spy).toHaveBeenCalledWith({title: '...'});

    });

    it('should add the new todo returned from the server', () => {
        // Arrange
        const spy = spyOn(service, 'addTodo').and.returnValue(Observable.of({title: '...'}));
        
        // ACt
        component.add();

        // Assert
        expect(component.todos.length).toBe(1);
    });

    it('should set the message property if server returns an error when adding a new todo', () => {
        
        // Arrange
        const spy = spyOn(service, 'addTodo').and.returnValue(Observable.throw('Server returned an error'));
        
        // ACt
        component.add();

        // Assert
        expect(component.message).toEqual('Server returned an error');

    });

    it('should call the server to delete a todo item if the user confirms', () => {

        // Arrange
        spyOn(window, 'confirm').and.returnValue(true);
        const spy = spyOn(service, 'deleteTodo').and.returnValue(Observable.empty());
        
        // Act
        component.delete(1);

        // Assert
        expect(spy).toHaveBeenCalled();

    });

    it('should NOT call the server to delete a todo item if the user cancels', () => {

                // Arrange
        spyOn(window, 'confirm').and.returnValue(false);
        const spy = spyOn(service, 'deleteTodo').and.returnValue(Observable.empty());
        
        // Act
        component.delete(1);

        // Assert
        expect(spy).not.toHaveBeenCalled();

    });


});
