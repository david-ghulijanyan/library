/* eslint-disable no-unused-vars */
const httpStatus = require("http-status");
const expressValidation = require("express-validation");
const { APIError } = require("../errors");
const { env } = require("../configs/vars");

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
const handler = (err, req, res, next) => {
	const response = {
		status: err.status,
		message: err.message || httpStatus[err.status],
		errors: err.errors,
		stack: err.stack,
	};

	if (env !== "development") {
		delete response.stack;
	}

	res.status(err.status);
	res.json(response);
};

/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
const converter = (err, req, res, next) => {
	let convertedError = err;
	console.log(err, err instanceof expressValidation.ValidationError, !(err instanceof APIError));
	if (err instanceof expressValidation.ValidationError) {
		convertedError = new APIError({
			message: "Validation Error",
			errors: err.details,
			status: err.statusCode,
			stack: err.stack,
		});
	} else if (!(err instanceof APIError)) {
		convertedError = new APIError({
			message: err.message,
			status: err.status,
			stack: err.stack,
		});
	}

	return handler(convertedError, req, res, next);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
const notFound = (req, res) => {
	const err = new APIError({
		message: "Not found",
		status: httpStatus.NOT_FOUND,
	});
	return handler(err, req, res);
};

module.exports = {
	handler,
	converter,
	notFound,
};
