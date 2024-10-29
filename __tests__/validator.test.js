import Validator from '../src/index';

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('valid username', () => {
        expect(validator.validateUsername('valid_username-123')).toBe(true);
    });

    test('invalid username with consecutive digits', () => {
        expect(validator.validateUsername('user1234name')).toBe(false);
    });

    test('invalid username starting with digit', () => {
        expect(validator.validateUsername('1username')).toBe(false);
    });

    test('invalid username ending with underscore', () => {
        expect(validator.validateUsername('username_')).toBe(false);
    });

    test('invalid username with special characters', () => {
        expect(validator.validateUsername('user@name')).toBe(false);
    });
});
