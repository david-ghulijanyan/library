/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// https://github.com/facebook/jest/issues/8987
const RESET_MODULE_EXCEPTIONS = ["react"];

const mockActualRegistry = {};

RESET_MODULE_EXCEPTIONS.forEach(moduleName => {
	jest.doMock(moduleName, () => {
		if (!mockActualRegistry[moduleName]) {
			mockActualRegistry[moduleName] = jest.requireActual(moduleName);
		}
		return mockActualRegistry[moduleName];
	});
});
