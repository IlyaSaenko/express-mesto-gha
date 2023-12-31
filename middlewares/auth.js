const jwt = require('jsonwebtoken');
const { SUPER_SECRET_KEY } = require('../utils/constants');
const UnauthorizedError = require('../errors/unauthorizedError');

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnauthorizedError('Неправильные почта или пароль');
  }
  const token = req.cookies.jwt;
  let payload;
  try {
    payload = jwt.verify(token, SUPER_SECRET_KEY);
  } catch (err) {
    throw new UnauthorizedError('Неправильные почта или пароль');
  }

  req.user = payload;

  return next();
};