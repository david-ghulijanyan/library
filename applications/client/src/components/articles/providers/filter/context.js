import { createContext } from "react";

const categories = ["Life Style", "Fashion", "Health"];

const FilterContext = createContext({
	category: null,
	categories,
	setFilter: () => {},
});

export default FilterContext;
