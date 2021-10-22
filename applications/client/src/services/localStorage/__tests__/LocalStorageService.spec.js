import utils from "@library/testing-utils";
import LocalStorageService from "..";

const { getError, NoErrorThrownError } = utils;

test("LocalStorageService should not allowed to create a new instance", () => {
	// Arrange
	const instance = () => new LocalStorageService();

	// Act
	const error = getError(instance);

	// Asserts
	expect(error).not.toBeInstanceOf(NoErrorThrownError);
	expect(error.message).toMatch("Use LocalStorageService.instance instead of new");
});
