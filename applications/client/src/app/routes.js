import React from "react";
import { Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "../components";
import {
	ArticleDetailsPage,
	ArticleCreatePage,
	ArticleEditPage,
	ArticlesPage,
	NotFoundPage,
	SignInPage,
	SignUpPage,
	WelcomePage,
} from "../pages";

const Routes = () => (
	<Switch>
		<PublicRoute exact path="/" component={WelcomePage} />
		<PublicRoute exact path="/articles" component={ArticlesPage} />
		<PublicRoute exact path="/signin" component={SignInPage} />
		<PublicRoute exact path="/signup" component={SignUpPage} />
		<PrivateRoute exact path="/articles/create" component={ArticleCreatePage} />
		<PublicRoute exact path="/articles/:articleId" component={ArticleDetailsPage} />
		<PrivateRoute exact path="/articles/:articleId/edit" component={ArticleEditPage} />

		<PublicRoute path="*" component={NotFoundPage} />
	</Switch>
);

export default Routes;
