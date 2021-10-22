import React from "react";
import { useHistory } from "react-router-dom";
import { AuthProvider } from "../providers";
import { SignUpForm } from "../components/forms";
import { ErrorBoundary, Layout } from "../components";

const SignUpPage = () => {
	const { signUp } = AuthProvider.useAuthContext();
	const history = useHistory();

	const handleSignUp = data => {
		signUp(data);
		history.push("/articles");
	};

	return (
		<ErrorBoundary>
			<Layout>
				<SignUpForm onSubmit={handleSignUp} />
			</Layout>
		</ErrorBoundary>
	);
};

export default SignUpPage;
