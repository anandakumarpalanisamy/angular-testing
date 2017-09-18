import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('should return the supported currencies', () => {
        expect(getCurrencies().length).toEqual(3);
    });
});
