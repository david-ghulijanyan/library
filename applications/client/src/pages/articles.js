import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import { Articles, ErrorBoundary, Layout } from "../components";
import { API_URL } from "../configs";
import { useRequest } from "../hooks";
import { useFilterContext } from "../components/articles/providers/filter";

const ArticlesPage = () => {
	const { category } = useFilterContext();
	const [filter, setFilter] = useState(category);
	const [page, setPage] = useState(1);
	const [queryObject, setQueryObject] = useState({ page });
	const [query, setQuery] = useState(qs.stringify(queryObject));
	const [searchQuery, setSearchQuery] = useState(null);
	const [hasMore, setHasMore] = useState(true);
	const [isSearching, setIsSearching] = useState(false);

	const { data, loading, makeRequest } = useRequest(axios, {
		url: `${API_URL}/articles?${query}`,
	});

	const [articles, setArticles] = useState(data);

	const handleOnSearch = sQuery => {
		setSearchQuery(sQuery);
		setIsSearching(true);
		setArticles(null);
		setPage(1);
		setQuery(qs.stringify({ ...queryObject, query: sQuery }));
	};

	useEffect(() => {
		if (!isSearching) {
			const newQueryObject = {
				...queryObject,
				page,
			};
			if (category) {
				newQueryObject.category = category;
			}
			if (searchQuery) {
				newQueryObject.query = searchQuery;
			}
			setQueryObject(newQueryObject);
			setQuery(qs.stringify(newQueryObject));
		}
		setIsSearching(false);

		makeRequest();

		if (filter !== category) {
			setArticles(null);
			setPage(1);
			setFilter(category);
		}
	}, [page, category, query]);

	useEffect(() => {
		if (data && data.length > 0) {
			const oldData = articles || [];
			setArticles([...oldData, ...data]);
		} else {
			setHasMore(!(page > 1 && (!data || data.length < 3)));
		}
	}, [data]);

	return (
		<Layout hasFilters filters={<Articles.Filters onSearch={handleOnSearch} />}>
			<Articles articles={articles} isLoading={loading} hasMore={hasMore} onSeeMore={() => setPage(page + 1)} />
		</Layout>
	);
};

// eslint-disable-next-line react/prop-types
const Wrapper = () => (
	<ErrorBoundary>
		<Articles.FilterProvider.Supplier>
			<ArticlesPage />
		</Articles.FilterProvider.Supplier>
	</ErrorBoundary>
);

export default Wrapper;
