import React from "react";
import PropTypes from "prop-types";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useFilterContext from "../providers/filter/useContext";
import Search from "../../search";

const Filters = ({ onSearch }) => {
	const { category: filter, setFilter, categories } = useFilterContext();

	return (
		<List>
			{onSearch && (
				<ListItem>
					<Search onChange={event => onSearch(event.target.value)} />
				</ListItem>
			)}
			{categories.map(category => (
				<ListItemButton
					key={category}
					selected={category === filter}
					onClick={e => {
						e.stopPropagation();
						setFilter(category);
					}}
				>
					<ListItemText primary={category} />
				</ListItemButton>
			))}
		</List>
	);
};

Filters.propTypes = {
	onSearch: PropTypes.func,
};

Filters.defaultProps = {
	onSearch: null,
};

export default Filters;
