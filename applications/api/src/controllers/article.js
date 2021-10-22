const httpStatus = require("http-status");
const { omit } = require("lodash");
const { ArticleModel } = require("../models");

/**
 * Load article and append to req.
 * @public
 */
const load = async (req, res, next, id) => {
	try {
		const article = await ArticleModel.get(id);
		req.locals = { article };
		return next();
	} catch (error) {
		return next(error);
	}
};

/**
 * Get article list
 * @public
 */
const list = async (req, res, next) => {
	try {
		const articles = await ArticleModel.list(req.query);
		const transformedarticles = articles.map(article => article);
		res.json(transformedarticles);
	} catch (error) {
		next(error);
	}
};

/**
 * Get article
 * @public
 */
const read = (req, res) => res.json(req.locals.article);

/**
 * Create new article
 * @public
 */
const create = async (req, res, next) => {
	if (req.file) {
		req.body.image = req.file.filename;
	}
	try {
		const article = new ArticleModel(req.body);
		const savedarticle = await article.save();
		res.status(httpStatus.CREATED);
		res.json(savedarticle);
	} catch (error) {
		next(error);
	}
};

/**
 * Update existing article
 * @public
 */
const update = (req, res, next) => {
	if (req.file) {
		req.body.image = req.file.filename;
	}
	const article = Object.assign(req.locals.article, req.body);

	article
		.save()
		.then(savedarticle => res.json(savedarticle))
		.catch(e => next(e));
};

/**
 * Delete article
 * @public
 */
const remove = (req, res, next) => {
	const { article } = req.locals;

	article
		.remove()
		.then(() => res.status(httpStatus.NO_CONTENT).end())
		.catch(e => next(e));
};

module.exports = {
	load,
	read,
	list,
	create,
	update,
	remove,
};
