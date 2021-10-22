import utils from "@library/testing-utils";
import axios from "axios";
import * as react from "react";
import useRequest from "../useRequest";

const { getError, mocks } = utils;
jest.mock("react", () => ({
	...jest.requireActual("react"),
	useCallback: jest.fn().mockImplementation(cb => cb),
	useState: jest.fn().mockReturnValue([1, jest.fn()]),
}));
jest.mock("axios");

test("Should thrown destructure property error", () => {
	// Arrange
	const fetcher = () => useRequest(axios);

	// Act
	const error = getError(fetcher);

	// Assert
	expect(error.message).toMatch(/Cannot destructure property/);
});

test("Should fetch data properly", async () => {
	// Arrange
	const options = {
		url: "localhost",
		method: "POST",
		data: { input: "value" },
	};
	const useState = jest.spyOn(react, "useState").mockReturnValue([true, jest.fn]);
	const useCallback = jest.spyOn(react, "useCallback").mockImplementation(cb => cb);

	const { axios: mockedAxios } = mocks;
	const request = mockedAxios.success("request", 200, {});

	// Act
	const { data, makeRequest } = useRequest(axios, options);
	await makeRequest();

	// Assert
	expect(useState).toBeCalledTimes(3);
	expect(useCallback).toBeCalledTimes(1);
	expect(request).toBeCalledTimes(1);
	expect(request).toBeCalledWith(options);
	expect(data).toBeTruthy();
});
