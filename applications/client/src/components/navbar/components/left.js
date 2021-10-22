import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

const NavbarLeft = ({ onToggleDrawer }) => (
	<>
		{onToggleDrawer && (
			<IconButton
				onClick={onToggleDrawer}
				size="large"
				edge="start"
				color="inherit"
				aria-label="open drawer"
				sx={{ mr: 2 }}
			>
				<MenuIcon />
			</IconButton>
		)}
		<Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
			Library
		</Typography>
	</>
);

NavbarLeft.propTypes = {
	onToggleDrawer: PropTypes.func,
};

NavbarLeft.defaultProps = {
	onToggleDrawer: null,
};

export default NavbarLeft;
