import React from "react";

import { NotFound, ErrorBoundary, Layout } from "../components";

export const NotFoundPage = () => (
	<ErrorBoundary>
		<Layout>
			<NotFound />
		</Layout>
	</ErrorBoundary>
);

export default NotFoundPage;
