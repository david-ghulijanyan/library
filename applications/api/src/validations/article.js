const Joi = require("joi");

const Article = require("../models/ArticleModel");

const validations = {
	// GET /v1/articles
	listArticles: {
		query: Joi.object({
			page: Joi.number(),
			perPage: Joi.number(),
			query: Joi.string(),
			title: Joi.string().min(3).max(50),
			description: Joi.string().max(250),
			category: Joi.any().allow(...Article.categories),
		}),
	},

	// POST /v1/articles
	createArticle: {
		body: Joi.object({
			title: Joi.string().min(3).max(50).required(),
			description: Joi.string().max(250),
			image: Joi.binary().max(2097152),
			category: Joi.any()
				.allow(...Article.categories)
				.required(),
		}),
	},

	// GET /v1/articles/:articleId
	readArticle: {
		params: Joi.object({
			articleId: Joi.string().alphanum().required(),
		}),
	},

	// PATCH /v1/articles/:articleId
	updateArticle: {
		body: Joi.object({
			title: Joi.string().min(3).max(50).required(),
			description: Joi.string().max(250),
			image: Joi.binary().max(2097152).required(),
			category: Joi.any()
				.allow(...Article.categories)
				.required(),
		}),
		params: Joi.object({
			articleId: Joi.string().alphanum().required(),
		}),
	},

	// DELETE /v1/articles/:articleId
	deleteArticle: {
		params: Joi.object({
			articleId: Joi.string().alphanum().required(),
		}),
	},
};

module.exports = validations;
