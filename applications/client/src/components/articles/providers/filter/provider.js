/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FilterContext from "./context";

const categories = ["Life Style", "Fashion", "Health"];

const FilterProvider = ({ children }) => {
	const [filter, setFilter] = useState(null);

	const handleSetFilter = newFilter => {
		if (newFilter === filter) {
			setFilter(null);
		} else {
			setFilter(newFilter);
		}
	};

	useEffect(() => {
		setFilter(null);
	}, []);

	const context = {
		category: filter,
		categories,
		setFilter: handleSetFilter,
	};

	return <FilterContext.Provider value={context}>{children}</FilterContext.Provider>;
};

FilterProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default FilterProvider;
