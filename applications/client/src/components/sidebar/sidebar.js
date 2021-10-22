import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Sidebar = ({ anchor, isOpen, onToggle, children }) => (
	<Drawer variant="persistent" anchor={anchor} open={isOpen}>
		{onToggle && (
			<IconButton onClick={onToggle}>
				<ChevronRightIcon />
			</IconButton>
		)}
		<Divider />
		{children}
	</Drawer>
);

Sidebar.propTypes = {
	children: PropTypes.node.isRequired,
	anchor: PropTypes.string,
	isOpen: PropTypes.bool,
	onToggle: PropTypes.func,
};

Sidebar.defaultProps = {
	isOpen: false,
	anchor: "left",
	onToggle: null,
};

export default Sidebar;
