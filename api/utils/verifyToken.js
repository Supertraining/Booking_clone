import Jwt from 'jsonwebtoken';
import { createError } from './error.js';

//We obtain accessToken from cookies
export const verifyToken = (req, res, next) => {
	const token = req.cookies.access_token;

	if (!token) {
		return next(createError(401, 'You are not authenticated'));
	}
	//if there is a token we verify it with JWT and it will return (err or user)
	Jwt.verify(token, process.env.Jwt, (err, user) => {
		if (err) return next(createError(403, 'Token not valid'));
		req.user = user;
		next();
	});
};

export const verifyUser = (req, res, next) => {
	//first we verify the token
	verifyToken(req, res, next, () => {
		//then if user.id stored in req.user is equal to the one in params or user is Admin you can then delete account, users, etc
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			return next(createError(403, 'You are not authorized'));
		}
	});
};

export const verifyAdmin = (req, res, next) => {
	verifyToken(req, res, next, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			return next(createError(403, 'You are not authorized'));
		}
	});
};
