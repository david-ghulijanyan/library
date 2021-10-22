/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../layout";

const Wrapper = ({ ...props }) => (
	<BrowserRouter>
		<Layout {...props} />
	</BrowserRouter>
);

export default Wrapper;
