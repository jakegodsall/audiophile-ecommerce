// jest.config.js
module.exports = {
	testEnvironment: 'jest-environment-jsdom', // Correct environment
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
