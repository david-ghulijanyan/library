const makeRequest = async (axios, { url, method = "GET", data, ...rest }) => {
	let response = null;
	let error = null;
	let loading = true;
	try {
		response = await axios.request({ url, method, data, ...rest });
	} catch (err) {
		error = err;
	} finally {
		loading = false;
	}

	return { data: response.data, error, loading };
};

export default makeRequest;
