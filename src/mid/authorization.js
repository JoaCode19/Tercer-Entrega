import { ErrorPermiss } from "./errorauth.js";

export function soloRol(rol) {
  return function (req, res, next) {
    const usrrole = req.session.user || req.session.passport.user;
    if (usrrole.role.includes(rol)) return next();
    return next(new ErrorPermiss(`solo disponible para rol '${rol}'`));
  };
}
