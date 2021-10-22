/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthProvider } from "../../providers";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component, ...rest }) => {
	const authContext = AuthProvider.useAuthContext();
	const { isAuthenticated } = authContext;

	const Component = component;

	const render = props => {
		if (!isAuthenticated) {
			return <Redirect to="/signin" />;
		}

		return <Component {...props} {...rest} />;
	};

	return <Route render={render} {...rest} />;
};

export default PrivateRoute;
