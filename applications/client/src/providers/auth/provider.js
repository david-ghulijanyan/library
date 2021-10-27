/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { LocalStorageService } from "../../services";
import { useRequest } from "../../hooks";
import AuthContext from "./context";

const AuthProvider = ({ children, apiUrl }) => {
	const localStorageService = LocalStorageService.instance;

	const [user, setUser] = useState(null);

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

	const handleSignIn = ({ email, password }) => {
		singIn({ email, password });
	};

	const handleSignUp = ({ email, password }) => {
		singUp({ email, password });
	};

	const handleSignOut = () => {
		setUser(null);
		localStorageService.clear("user");
		singOut();
	};

	useEffect(() => {
		let userData = localStorageService.user ? JSON.parse(localStorageService.user) : null;
		if (!userData) {
			if (signInData && !signInError) {
				userData = signInData.token;
			}
			if (signUpData && !signUpError) {
				userData = signUpData.token;
			}
		}

		localStorageService.item("user", JSON.stringify(userData));
		setUser(userData);

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
	}, [signInData, signUpData]);

	const context = {
		signIn: handleSignIn,
		signUp: handleSignUp,
		signOut: handleSignOut,
		isAuthenticated: !!user,
	};

	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
