import React from "react";
import { useHistory } from "react-router-dom";
import { ArticleForm } from "../components/forms";
import { ErrorBoundary, Layout } from "../components";
import { CrudService } from "../services";
import { API_URL } from "../configs";

const ArticleCreatePage = () => {
	const crudService = new CrudService({ apiUrl: `${API_URL}` });
	const history = useHistory();

	const handleSubmit = async data => {
		await crudService.create(data);
		history.push("/articles");
	};

	return (
		<ErrorBoundary>
			<Layout>
				<ArticleForm onSubmit={handleSubmit} />
			</Layout>
		</ErrorBoundary>
	);
};

export default ArticleCreatePage;
