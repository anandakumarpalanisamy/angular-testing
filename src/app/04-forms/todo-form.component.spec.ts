import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {

    let component: TodoFormComponent;

    beforeEach( () => {
        component = new TodoFormComponent(new FormBuilder());
    });

    it('should create a form with 2 controls', () => {

    });

    it('should make the name control required', () => {

    });

});
