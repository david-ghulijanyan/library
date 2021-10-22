import * as utils from "@library/utils";
import testingUtils from "@library/testing-utils";
import CrudService from "..";

jest.mock("axios");

jest.mock("@library/utils");

let crudService;

const { getErrorAsync } = testingUtils;

const formData = {
	image: "image",
	title: "title",
	category: "category",
	description: "description",
};

beforeEach(() => {
	global.FormData = jest.fn().mockImplementation(() => ({
		append: jest.fn(),
	}));
	crudService = new CrudService({ apiUrl: "localhost" });
});

// Clear mocks
afterEach(() => {
	jest.clearAllMocks();
	jest.resetAllMocks();
});

["create", "update"].forEach(method => {
	describe(`${method}`, () => {
		test("should pass if have a good response", async () => {
			// Arrange
			const fetcher = jest.spyOn(utils, "makeRequest").mockResolvedValue({ data: formData });
			const handleError = jest.spyOn(CrudService.prototype, "handleError");
			// Act
			const data = await crudService[method](formData);
			// Assert
			expect(fetcher).toBeCalledTimes(1);
			expect(handleError).toBeCalledTimes(0);
			expect(data).toEqual(formData);
		});
		test("should fail if have a bad response", async () => {
			// Arrange
			const fetcher = jest.spyOn(utils, "makeRequest").mockRejectedValue({ error: formData });
			const handleError = jest.spyOn(CrudService.prototype, "handleError").mockReturnValue(formData);
			const methodCall = () => crudService[method](formData);
			// Act
			const { error } = await getErrorAsync(methodCall);

			// Assert
			expect(fetcher).toBeCalledTimes(1);
			expect(handleError).toBeCalledTimes(0);
			expect(error).toEqual(formData);
		});
	});
});
