import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

const categories = ["Life Style", "Fashion", "Health"];

const ArticleForm = ({ onSubmit, article }) => {
	const [image, setImage] = useState(null);
	const [existingImage, setExistingImage] = useState(null);
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState(categories[0]);
	const [description, setDescription] = useState("");
	const [errors] = useState(Object.create(null));
	const handleSubmit = event => {
		event.preventDefault();
		event.stopPropagation();

		onSubmit({
			image,
			title,
			category,
			description,
		});
	};

	useEffect(() => {
		if (article) {
			if (article.image) {
				setExistingImage(article.image);
			}
			setTitle(article.title ? article.title : "");
			setCategory(article.category ? article.category : categories[0]);
			setDescription(article.description ? article.description : "");
		}
	}, [article]);

	return (
		<Paper>
			<Typography align="center" variant="headline">
				{article ? "Edit" : "Add"} Post
			</Typography>
			<form noValidate onSubmit={handleSubmit}>
				{existingImage && <img src={existingImage} alt="" />}
				<TextField
					type="file"
					margin="normal"
					name="image"
					className="textField"
					helperText={errors.image}
					error={!!errors.image}
					value={image}
					onChange={e => setImage(e.target.value)}
					fullWidth
					required
				/>
				<TextField
					label="Title"
					placeholder="Enter a title"
					margin="normal"
					type="text"
					name="title"
					className="textField"
					helperText={errors.title}
					error={!!errors.title}
					value={title}
					onChange={e => setTitle(e.target.value)}
					fullWidth
					required
				/>
				<FormControl fullWidth>
					<InputLabel id="category">Category</InputLabel>
					<Select
						labelId="category"
						value={category}
						label="Category"
						onChange={e => setCategory(e.target.value)}
						required
					>
						{categories.map(cat => (
							<MenuItem key={cat} value={cat}>
								{cat}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<TextField
					label="Description"
					placeholder="Desscribe your article here"
					multiline
					rows={6}
					margin="normal"
					type="textarea"
					name="description"
					className="textField"
					helperText={errors.description}
					error={!!errors.description}
					value={description}
					onChange={e => setDescription(e.target.value)}
					fullWidth
				/>
				<Button type="submit" color="primary" variant="contained" size="large">
					Save Post
				</Button>
			</form>
		</Paper>
	);
};

ArticleForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	article: PropTypes.shape({
		title: PropTypes.string,
		category: PropTypes.string,
		image: PropTypes.string,
		description: PropTypes.string,
	}),
};

ArticleForm.defaultProps = {
	article: null,
};

export default ArticleForm;
