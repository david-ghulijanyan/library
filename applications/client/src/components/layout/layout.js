import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import NavBar from "../navbar";
import Sidebar from "../sidebar";
import { AuthProvider } from "../../providers";

import "./style.scss";

const Layout = ({ children, hasFilters, filters }) => {
	const { isAuthenticated, signOut } = AuthProvider.useAuthContext();
	const history = useHistory();
	const [open, setOpen] = useState(false);

	const handleLogout = () => {
		signOut();
		history.push("/");
	};

	return (
		<>
			<NavBar
				isAuthenticated={isAuthenticated}
				onLogout={handleLogout}
				onToggleDrawer={() => setOpen(!open)}
				hasFilters={hasFilters}
			/>
			{hasFilters && (
				<Sidebar isOpen={open} onToggle={() => setOpen(!open)}>
					{filters}
				</Sidebar>
			)}
			<Container className="main-wrapper" component="main">
				{children}
			</Container>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	filters: PropTypes.node,
	hasFilters: PropTypes.bool,
};

Layout.defaultProps = {
	hasFilters: false,
	filters: null,
};

export default Layout;
