import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavbarLeft, NavbarRight } from "./components";

const Navbar = ({ isAuthenticated, onLogout, onToggleDrawer, hasFilters }) => (
	<Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
			<Toolbar>
				<NavbarLeft onToggleDrawer={hasFilters ? onToggleDrawer : null} />
				<Box sx={{ flexGrow: 1 }} />
				<NavbarRight isAuthenticated={isAuthenticated} onLogout={onLogout} />
			</Toolbar>
		</AppBar>
	</Box>
);

Navbar.propTypes = {
	onToggleDrawer: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	hasFilters: PropTypes.bool,
};

Navbar.defaultProps = {
	isAuthenticated: false,
	hasFilters: false,
};

export default Navbar;
