/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { LocalStorageService } from "../../services";
import { useRequest } from "../../hooks";
import AuthContext from "./context";

const AuthProvider = ({ children, apiUrl }) => {
	const localStorageService = LocalStorageService.instance;

	const [user, setUser] = useState(localStorageService.user ? JSON.parse(localStorageService.user) : null);

	const {
		data: signInData,
		error: signInError,
		// loading: signInLoading,
		makeRequest: singIn,
	} = useRequest(axios, {
		url: `${apiUrl || ""}/auth/signin`,
		method: "POST",
	});

	const {
		data: signUpData,
		error: signUpError,
		// loading: signUpLoading,
		makeRequest: singUp,
	} = useRequest(axios, {
		url: `${apiUrl || ""}/auth/signup`,
		method: "POST",
	});

	const {
		// data: signOutData,
		// error: signOutError,
		// loading: signOutLoading,
		makeRequest: singOut,
	} = useRequest(axios, {
		url: `${apiUrl || ""}/auth/signout`,
		method: "POST",
	});

	const handleSignIn = async ({ email, password }) => {
		await singIn({ email, password });
		if (signInData && !signInError) {
			localStorageService.item("user", JSON.stringify(signInData.token));
			setUser(signInData.token);
		} else {
			// error handle
		}
	};

	const handleSignUp = async ({ email, password }) => {
		await singUp({ email, password });
		if (signUpData && !signUpError) {
			localStorageService.item("user", JSON.stringify(signUpData.token));
			setUser(signUpData.token);
		} else {
			// error handle
		}
	};

	const handleSignOut = async () => {
		setUser(null);
		localStorageService.clear("user");
		await singOut();
	};

	useEffect(() => {
		const interceptor = axios.interceptors.request.use(
			config => {
				if (user && user.accessToken) {
					// eslint-disable-next-line no-param-reassign
					config.headers = {
						Authorization: `Bearer ${user.accessToken}`,
					};
				}

				return config;
			},
			error => Promise.reject(error),
		);

		axios.interceptors.response.use(
			response =>
				// Any status code that lie within the range of 2xx cause this function to trigger
				// Do something with response data
				response,
			error => {
				// eslint-disable-next-line no-alert
				alert(JSON.stringify(error.message));
				Promise.reject(error);
			},
		);

		return () => {
			axios.interceptors.request.eject(interceptor);
		};
	}, [user]);

	const context = {
		signIn: handleSignIn,
		signUp: handleSignUp,
		signOut: handleSignOut,
		isAuthenticated: !!user,
	};

	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
