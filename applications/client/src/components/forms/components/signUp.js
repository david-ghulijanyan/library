import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const SignUp = ({ onSubmit, loading }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors] = useState(Object.create(null));

	const handleSubmit = event => {
		event.preventDefault();
		event.stopPropagation();

		onSubmit({
			email,
			password,
			confirmPassword,
		});
	};

	return (
		<Grid container className="form">
			<Grid item sm />
			<Grid item sm>
				<Typography variant="h4" className="pageTitle">
					SignUp
				</Typography>
				<form noValidate onSubmit={handleSubmit}>
					<TextField
						id="email"
						name="email"
						type="email"
						label="Email"
						className="textField"
						helperText={errors.email}
						error={!!errors.email}
						value={email}
						onChange={e => setEmail(e.target.value)}
						fullWidth
					/>
					<TextField
						id="password"
						name="password"
						type="password"
						label="Password"
						className="textField"
						helperText={errors.password}
						error={!!errors.password}
						value={password}
						onChange={e => setPassword(e.target.value)}
						fullWidth
					/>
					<TextField
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						label="Confirm Password"
						className="textField"
						helperText={errors.confirmPassword}
						error={!!errors.confirmPassword}
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
						fullWidth
					/>
					{errors.common && (
						<Typography variant="body2" className="customError">
							{errors.common}
						</Typography>
					)}
					<Button type="submit" variant="contained" color="primary" className="button" disabled={loading}>
						SignUp
						{loading && <CircularProgress size={30} className="progress" />}
					</Button>
					<br />
					<small>
						Have an account ? Sign in <Link to="/signin">here</Link>
					</small>
				</form>
			</Grid>
			<Grid item sm />
		</Grid>
	);
};

SignUp.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	loading: PropTypes.bool,
};

SignUp.defaultProps = {
	loading: false,
};

export default SignUp;
