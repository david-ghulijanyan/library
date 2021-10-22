import { useContext } from "react";
import AuthContext from "./context";

const useAppContext = () => useContext(AuthContext);

export default useAppContext;
