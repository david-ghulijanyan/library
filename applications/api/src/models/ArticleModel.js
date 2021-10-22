const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omitBy, isNil } = require("lodash");
const APIError = require("../errors/APIError");

/**
 * Categories list
 */
const categories = ["Life Style", "Fashion", "Health"];

/**
 * Article Schema
 * @private
 */
const articleSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			maxlength: 128,
			index: true,
			trim: true,
		},
		description: {
			type: String,
			maxlength: 128,
			index: true,
			trim: true,
		},
		image: {
			type: String,
			trim: true,
		},
		category: {
			type: String,
			enum: categories,
			default: categories[0],
		},
	},
	{
		timestamps: true,
	},
);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
articleSchema.pre("save", async next => {
	try {
		// some changes
		return next();
	} catch (error) {
		return next(error);
	}
});

/**
 * Statics
 */
articleSchema.statics = {
	categories,

	/**
	 * Get article
	 *
	 * @param {ObjectId} id - The objectId of article.
	 * @returns {Promise<Article, APIError>}
	 */
	async get(id) {
		let article;

		if (mongoose.Types.ObjectId.isValid(id)) {
			article = await this.findById(id).exec();
		}
		if (article) {
			return article;
		}

		throw new APIError({
			message: "Article does not exist",
			status: httpStatus.NOT_FOUND,
		});
	},

	/**
	 * List articles in descending order of 'createdAt' timestamp.
	 *
	 * @param {number} skip - Number of articles to be skipped.
	 * @param {number} limit - Limit number of articles to be returned.
	 * @returns {Promise<Article[]>}
	 */
	list({ page = 1, perPage = 3, title, description, category, query }) {
		let options = omitBy({ title, description, category }, isNil);

		if (query) {
			options = {
				title: { $regex: query, $options: "i" },
				// category: { $regex: query, $options: "i" },
			};
		}

		return this.find(options)
			.sort({ createdAt: -1 })
			.skip(perPage * (page - 1))
			.limit(perPage)
			.exec();
	},
};

const ArticleModel = mongoose.model("Article", articleSchema);

// ArticleModel.createIndexes({ title: "text", category: "text" });

module.exports = ArticleModel;
