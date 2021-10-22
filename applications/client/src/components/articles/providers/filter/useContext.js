import { useContext } from "react";
import FilterContext from "./context";

const useFilterContext = () => useContext(FilterContext);

export default useFilterContext;
