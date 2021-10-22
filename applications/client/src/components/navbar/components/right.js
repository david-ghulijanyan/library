import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const NavbarRight = ({ isAuthenticated, onLogout }) => (
	<>
		{isAuthenticated ? (
			<Box sx={{ display: { xs: "none", md: "flex" } }}>
				<Button color="inherit" to="/articles/create" component={Link}>
					Add Post
				</Button>
				<Button color="inherit" onClick={onLogout}>
					Sign Out
				</Button>
			</Box>
		) : (
			<>
				<Button color="inherit" to="/signin" component={Link}>
					Sing In
				</Button>
				<Button to="/signup" component={Link} color="inherit">
					Sign Up
				</Button>
			</>
		)}
	</>
);

NavbarRight.propTypes = {
	isAuthenticated: PropTypes.bool,
	onLogout: PropTypes.func.isRequired,
};

NavbarRight.defaultProps = {
	isAuthenticated: false,
};

export default NavbarRight;
