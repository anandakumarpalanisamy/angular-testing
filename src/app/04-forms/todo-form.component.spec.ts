import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {

    let component: TodoFormComponent;

    beforeEach( () => {
        // Arrange
        component = new TodoFormComponent(new FormBuilder());
    });

    it('should create a form with 2 controls', () => {
        // Assert
        expect(component.form.controls['name']).toBeTruthy();
        expect(component.form.controls['email']).toBeTruthy();
    });

    it('should make the name control required', () => {
        
        // Arrange
        const nameControl = component.form.get('name');

        // Act
        nameControl.setValue('Anand');

        // Assert
        expect(nameControl.valid).toBeTruthy();

    });

});
