import { react as utils } from "@library/testing-utils";
// import * as router from "react-router-dom";
import NotFound from "..";

jest.mock("react-router-dom", () => ({
	useHistory: () => ({
		goBack: jest.fn(),
	}),
}));

const { render } = utils;

describe("NotFound component", () => {
	test("Should render properly with 404 error code", () => {
		// Arrange
		// Act
		const { container } = render(NotFound);

		// Assert
		expect(container).toHaveTextContent(/Error: 404 Page not found! Please, go back or go to home page/);
		expect(container).toMatchSnapshot();
	});
	test("Should render properly with 500 error code", () => {
		// Arrange
		// Act
		const { container } = render(NotFound, { code: 500, message: "Internal server error" });

		// Assert
		expect(container).toHaveTextContent(/Error: 500 Internal server error Please, go back or go to home page/);
		expect(container).toMatchSnapshot();
	});
});
