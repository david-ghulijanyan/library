import NoErrorThrownError from "./NoErrorThrownError";

const getError = call => {
	try {
		call();

		throw new NoErrorThrownError();
	} catch (error) {
		return error;
	}
};

export default getError;
