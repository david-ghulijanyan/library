import * as axios from "axios";

// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios");

// Success request mock implementation
const success = (method, status, data) => axios[method].mockResolvedValue({ status, data });

// Fail request mock implementation
const fail = (method, status, data) => axios[method].mockRejectedValue({ status, data });

// IsCancel mock implementation
const isCancel = (result = false) => axios.isCancel.mockReturnValue(result);

// Error instance
const error = (message = null, response = {}) => {
	const result = new Error(message);
	result.response = {
		config: {},
		data: {},
		headers: {},
		status: 200,
		statusText: "OK",
		...response,
	};

	return result;
};
export { success, fail, isCancel, error, axios };
