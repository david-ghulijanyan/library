import NoErrorThrownError from "./NoErrorThrownError";

const getErrorAsync = async call => {
	try {
		await call();

		throw new NoErrorThrownError();
	} catch (error) {
		return error;
	}
};

export default getErrorAsync;
