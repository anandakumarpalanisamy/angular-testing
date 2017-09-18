import { compute } from './compute';


describe('Compute', () => {

    it('should return 0 if i input a negative number', () => {

        expect(compute(-1)).toEqual(0); 
        
    });

    it('should increment the value by 1 if i input a positive number', () => {

        // Act
        const result = compute(1);
        // Assert
        expect(result).toEqual(2); 

    });

});