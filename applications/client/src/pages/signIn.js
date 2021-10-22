import React from "react";
import { useHistory } from "react-router-dom";
import { AuthProvider } from "../providers";
import { SignInForm } from "../components/forms";
import { ErrorBoundary, Layout } from "../components";

const SignInPage = () => {
	const { signIn } = AuthProvider.useAuthContext();
	const history = useHistory();

	const handleSignIn = data => {
		signIn(data);
		history.push("/articles");
	};

	return (
		<ErrorBoundary>
			<Layout>
				<SignInForm onSubmit={handleSignIn} />
			</Layout>
		</ErrorBoundary>
	);
};

export default SignInPage;
