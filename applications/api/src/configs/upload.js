const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, path.resolve(__dirname, "../public/uploads"));
	},
	filename(req, file, cb) {
		const ext = file.mimetype.split("/")[1];
		const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
		cb(null, `${uniqueSuffix}.${ext}`);
	},
});

module.exports = multer({ storage });
