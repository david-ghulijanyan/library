import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Welcome = () => (
	<>
		<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
			Library
		</Typography>
		<Typography variant="h5" align="center" color="textSecondary" paragraph>
			Welcome to the{" "}
			<Button variant="contained" component={Link} to="/articles" color="primary">
				Library
			</Button>
			<br />
			Please singin if you want to create or edit any article.
		</Typography>
	</>
);

export default Welcome;
