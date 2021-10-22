/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthProvider } from "../../providers";

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ component, restricted, ...rest }) => {
	const { isAuthenticated } = AuthProvider.useAuthContext();
	const Component = component;
	const render = props => {
		if (isAuthenticated && restricted) {
			return <Redirect to="/" />;
		}
		return <Component {...props} {...rest} />;
	};

	return <Route render={render} {...rest} />;
};

PublicRoute.defaultProps = {
	restricted: false,
};

export default PublicRoute;
