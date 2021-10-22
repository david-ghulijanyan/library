import { react as utils } from "@library/testing-utils";
import App from "../App";

const { render } = utils;

describe("Main App", () => {
	test("Should match snapshot", () => {
		// Arrange
		// Act
		const { container } = render(App);

		// Assert
		expect(container).toMatchSnapshot();
	});
});
