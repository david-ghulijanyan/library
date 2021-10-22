import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

import "./style.scss";

const NotFound = ({ code, message }) => {
	const history = useHistory();

	return (
		<div className="error">
			<h1>Error: </h1>
			<p className="error-code">{code} </p>
			<p className="error-message">{message} </p>
			<div className="error-actions">
				<span>Please, </span>
				<Button onClick={history.goBack} color="primary">
					go back
				</Button>
				<span> or </span>
				<Button onClick={() => history.push("/")} color="primary">
					go to home page
				</Button>
			</div>
		</div>
	);
};

NotFound.propTypes = {
	code: PropTypes.number,
	message: PropTypes.string,
};

NotFound.defaultProps = {
	code: 404,
	message: "Page not found!",
};

export default NotFound;
