/* eslint-disable no-underscore-dangle */
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useRequest } from "../hooks";
import { API_URL } from "../configs";
import { Articles, ErrorBoundary, Layout } from "../components";

const ArticlesPage = () => {
	const history = useHistory();
	const { articleId } = useParams();

	const { data: article, makeRequest: fetchArticle } = useRequest(axios, {
		url: `${API_URL}/articles/${articleId}`,
	});

	const { makeRequest: deleteArticle } = useRequest(axios, {
		url: `${API_URL}/articles/${articleId}`,
		method: "DELETE",
	});

	const handleDelete = event => {
		event.stopPropagation();
		deleteArticle();
		history.push("/articles");
	};
	const handleEdit = event => {
		event.stopPropagation();
		history.push(`/articles/${articleId}/edit`);
	};
	useEffect(() => {
		fetchArticle();
	}, []);

	return (
		<ErrorBoundary>
			<Layout>
				<Articles.Article
					isPage
					image={article ? article.image : null}
					title={article ? article.title : ""}
					description={article ? article.description : ""}
					id={article ? article._id : null}
					onDelete={handleDelete}
					onEdit={handleEdit}
				/>
			</Layout>
		</ErrorBoundary>
	);
};

export default ArticlesPage;
