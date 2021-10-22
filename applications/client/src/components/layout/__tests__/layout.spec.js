import { react as utils } from "@library/testing-utils";
import Layout from "./wrapper";

const { render } = utils;

describe("Layout component", () => {
	test("Should render properly and match snapshot", () => {
		// Arrange
		// Act
		const { container } = render(Layout, { children: 1 });

		// Assert
		expect(container).toMatchSnapshot();
	});
	test("Should not render properly if no children provided", () => {
		// Arrange
		const error = jest.spyOn(console, "error").mockReturnValue(true);
		// Actw
		const { container } = render(Layout);

		// Assert
		expect(error).toBeCalledTimes(1);
		expect(container).toMatchSnapshot();
	});
});
