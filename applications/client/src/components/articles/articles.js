/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Filters, Article } from "./components";
import { FilterProvider } from "./providers";

export const Articles = ({ articles, isLoading, hasMore, onSeeMore }) => (
	<Grid container>
		{articles ? (
			articles.map(article => (
				<Grid item key={article.title} sm={4}>
					<Article image={article.image} title={article.title} description={article.description} id={article._id} />
				</Grid>
			))
		) : (
			<Grid item>
				<Card>
					<CardContent>
						<Typography gutterBottom variant="headline" component="h2">
							No articles found
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		)}
		{hasMore && (
			<Grid>
				<Button variant="contained" onClick={onSeeMore} color="primary" loading={`${isLoading}`}>
					See More
				</Button>
			</Grid>
		)}
	</Grid>
);

Articles.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.object),
	isLoading: PropTypes.bool,
	hasMore: PropTypes.bool,
	onSeeMore: PropTypes.func.isRequired,
};

Articles.defaultProps = {
	articles: null,
	isLoading: false,
	hasMore: true,
};

Articles.Article = Article;

Articles.Filters = Filters;

Articles.FilterProvider = FilterProvider;

export default Articles;
