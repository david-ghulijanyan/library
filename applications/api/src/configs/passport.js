const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { jwtSecret } = require("./vars");
const { UserModel } = require("../models");

const jwtOptions = {
	secretOrKey: jwtSecret,
	jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
};

const jwt = async (payload, done) => {
	try {
		const user = await UserModel.findById(payload.sub);
		if (user) return done(null, user);
		return done(null, false);
	} catch (error) {
		return done(error, false);
	}
};

exports.jwt = new JwtStrategy(jwtOptions, jwt);
