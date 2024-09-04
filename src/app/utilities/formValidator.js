class FormValidator {
	constructor() {
		// Prevent instantiation of the class
		throw new Error('This class cannot be instantiated');
	}

	/**
	 * Validates that the input text is less than 100 characters and is not empty.
	 * @param {string} text - The input text to be validated.
	 * @returns {boolean} - Returns true if valid, false otherwise.
	 */
	static validateTextInput(text) {
		return (
			typeof text === 'string' &&
			text.trim().length > 0 &&
			text.length <= 100
		);
	}

	/**
	 * Validates if the input is a valid email.
	 * @param {string} email - The email to be validated.
	 * @returns {boolean} - Returns true if valid, false otherwise.
	 */
	static validateEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	/**
	 * Validates if the input is a valid phone number (10-15 digits).
	 * @param {string} phone - The phone number to be validated.
	 * @returns {boolean} - Returns true if valid, false otherwise.
	 */
	static validatePhoneNumber(phone) {
		const phoneRegex = /^[0-9]{10,15}$/;
		return phoneRegex.test(phone);
	}

	/**
	 * Validates if the input is a valid zip or postal code.
	 * This assumes the format could be US (5 digits) or international (alphanumeric).
	 * @param {string} zipCode - The zip or postal code to be validated.
	 * @returns {boolean} - Returns true if valid, false otherwise.
	 */
	static validateZipCode(zipCode) {
		const zipCodeRegex = /^[A-Za-z0-9\s\-]{3,10}$/;
		return zipCodeRegex.test(zipCode);
	}
}

module.exports = FormValidator;
