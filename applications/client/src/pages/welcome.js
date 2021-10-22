import React from "react";
import { Welcome, ErrorBoundary, Layout } from "../components";

export const WelcomePage = () => (
	<ErrorBoundary>
		<Layout>
			<Welcome />
		</Layout>
	</ErrorBoundary>
);

export default WelcomePage;
