import React from "react";
import { BrowserRouter } from "react-router-dom";
import { API_URL } from "../configs";
import { AuthProvider, ThemeProvider } from "../providers";
import AppRouter from "./routes";

const App = () => (
	<ThemeProvider>
		<BrowserRouter>
			<AuthProvider.Supplier apiUrl={API_URL}>
				<AppRouter />
			</AuthProvider.Supplier>
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
