import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { ArticleForm } from "../components/forms";
import { ErrorBoundary, Layout } from "../components";
import { CrudService } from "../services";
import { API_URL } from "../configs";
import { useRequest } from "../hooks";

const ArticleEditPage = () => {
	const crudService = new CrudService({ apiUrl: `${API_URL}` });
	const history = useHistory();
	const { articleId } = useParams();
	const { data, makeRequest } = useRequest(axios, {
		url: `${API_URL}/articles/${articleId}`,
		method: "GET",
	});

	useEffect(() => {
		makeRequest();
	}, [articleId]);

	const handleSubmit = async articleData => {
		await crudService.update({
			...articleData,
			id: articleId,
		});
		history.push("/articles");
	};

	return (
		<ErrorBoundary>
			<Layout>
				<ArticleForm onSubmit={handleSubmit} article={data} />
			</Layout>
		</ErrorBoundary>
	);
};

export default ArticleEditPage;
