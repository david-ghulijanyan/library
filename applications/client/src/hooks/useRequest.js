import { useCallback, useState } from "react";

const useRequest = (axios, { url, method = "GET", data, ...rest }) => {
	const [responseData, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const makeRequest = useCallback(
		async customData => {
			try {
				setLoading(true);
				const response = await axios.request({ url, method, data: customData || data, ...rest });
				setData(response.data);
			} catch (err) {
				console.log(err);
				setError(err);
			} finally {
				setLoading(false);
			}
		},
		[url, method, data],
	);

	return { data: responseData, error, loading, makeRequest };
};

export default useRequest;
