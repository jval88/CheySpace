import { Request, Response, NextFunction } from "express";

export const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated() && req.user) {
    return next();
  }
  res.redirect("/auth/google");
};

// You can also create a middleware specifically to check if the user is an admin
export const ensureAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated() && req.user) {
    return next();
  }
  res.status(403).send("Access denied. Admins only.");
};
