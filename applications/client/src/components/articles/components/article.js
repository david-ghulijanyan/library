/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { IMAGE_PATH } from "../../../configs";

export const Article = ({ image, title, description, id, onDelete, onEdit, isPage }) => {
	const history = useHistory();
	if (id) {
		return (
			<Card>
				{image && <CardMedia component="img" src={`${IMAGE_PATH}/${image}`} />}
				<CardContent>
					<Typography gutterBottom variant="headline" component="h2">
						{title}
					</Typography>
					<Typography>{description}</Typography>
				</CardContent>
				<CardActions>
					{!isPage ? (
						<Button size="small" color="primary" onClick={() => history.push(`/articles/${id}`)}>
							Read More
						</Button>
					) : (
						<>
							<Button color="primary" onClick={() => history.goBack()}>
								Go Back
							</Button>
							{onEdit && (
								<Button color="primary" onClick={onEdit}>
									Edit
								</Button>
							)}
							{onDelete && (
								<Button color="primary" onClick={onDelete}>
									Delete
								</Button>
							)}
						</>
					)}
				</CardActions>
			</Card>
		);
	}
	return null;
};

Article.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	id: PropTypes.string,
	onDelete: PropTypes.func,
	onEdit: PropTypes.func,
	isPage: PropTypes.bool,
};

Article.defaultProps = {
	id: null,
	image: null,
	title: "",
	description: "",
	onDelete: null,
	onEdit: null,
	isPage: false,
};

export default Article;
