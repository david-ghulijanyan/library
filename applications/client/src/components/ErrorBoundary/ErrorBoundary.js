/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			errorInfo: null,
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ errorInfo, error });
	}

	render() {
		const { hasError, errorInfo, error } = this.state;
		const { children } = this.props;

		if (hasError) {
			return (
				<Card className="error-boundary">
					<CardContent>
						<Typography color="text.secondary" gutterBottom>
							Something went wrong...
						</Typography>
						<Typography variant="h4" component="div">
							{error ? error.message : null}
						</Typography>
						{error && (
							<Typography variant="body2" component="details" style={{ whiteSpace: "pre-wrap" }}>
								<Typography variant="h6" component="summary">
									Click for error details
								</Typography>
								{error.toString()}
								<br />
								{errorInfo ? errorInfo.componentStack : null}
							</Typography>
						)}
					</CardContent>
				</Card>
			);
		}

		return children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
