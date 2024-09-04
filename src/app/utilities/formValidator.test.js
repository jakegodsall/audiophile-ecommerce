// utils/FormValidator.test.js

const FormValidator = require('./formValidator');

describe('FormValidator', () => {
	// Test for validateTextInput
	describe('validateTextInput', () => {
		test('should return true for valid text input', () => {
			expect(FormValidator.validateTextInput('Valid text')).toBe(true);
		});

		test('should return false for empty text input', () => {
			expect(FormValidator.validateTextInput('')).toBe(false);
		});

		test('should return false for text input with only spaces', () => {
			expect(FormValidator.validateTextInput('    ')).toBe(false);
		});

		test('should return false for text longer than 100 characters', () => {
			const longText = 'a'.repeat(101);
			expect(FormValidator.validateTextInput(longText)).toBe(false);
		});
	});

	// Test for validateEmail
	describe('validateEmail', () => {
		test('should return true for a valid email', () => {
			expect(FormValidator.validateEmail('test@example.com')).toBe(true);
		});

		test('should return false for an invalid email', () => {
			expect(FormValidator.validateEmail('invalid-email')).toBe(false);
		});
	});

	// Test for validatePhoneNumber
	describe('validatePhoneNumber', () => {
		test('should return true for a valid phone number (10 digits)', () => {
			expect(FormValidator.validatePhoneNumber('1234567890')).toBe(true);
		});

		test('should return false for a phone number with non-numeric characters', () => {
			expect(FormValidator.validatePhoneNumber('123abc7890')).toBe(false);
		});

		test('should return false for a phone number shorter than 10 digits', () => {
			expect(FormValidator.validatePhoneNumber('12345')).toBe(false);
		});

		test('should return false for a phone number longer than 15 digits', () => {
			expect(FormValidator.validatePhoneNumber('1234567890123456')).toBe(
				false,
			);
		});
	});

	// Test for validateZipCode
	describe('validateZipCode', () => {
		test('should return true for a valid US zip code (5 digits)', () => {
			expect(FormValidator.validateZipCode('12345')).toBe(true);
		});

		test('should return true for a valid international zip code with letters and numbers', () => {
			expect(FormValidator.validateZipCode('A1B 2C3')).toBe(true);
		});

		test('should return false for an invalid zip code', () => {
			expect(FormValidator.validateZipCode('!@#$%')).toBe(false);
		});

		test('should return false for a zip code that is too short', () => {
			expect(FormValidator.validateZipCode('12')).toBe(false);
		});
	});
});
