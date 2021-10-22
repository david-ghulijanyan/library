const express = require("express");
const { validate } = require("express-validation");
const upload = require("../../configs/upload");
const controller = require("../../controllers/article");
const { authorize, LOGGED_USER } = require("../../middlewares/auth");
const { listArticles, createArticle, readArticle, updateArticle, deleteArticle } = require("../../validations/article");

const router = express.Router();

/**
 * Load article if articleId route parameter exists
 */
router.param("articleId", controller.load);

router
	.route("/")
	.get(validate(listArticles), controller.list)
	.post(authorize(LOGGED_USER), upload.single("image"), validate(createArticle), controller.create);

router
	.route("/:articleId")
	.get(validate(readArticle), controller.read)
	.patch(authorize(LOGGED_USER), upload.single("image"), validate(updateArticle), controller.update)
	.delete(authorize(LOGGED_USER), validate(deleteArticle), controller.remove);

module.exports = router;
