import { createContext } from "react";

const AuthContext = createContext({
	signIn: null,
	signUp: null,
	signOut: null,
	isAuthenticated: false,
});

export default AuthContext;
