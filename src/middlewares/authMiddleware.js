import { getAUser } from "../models/UserModel.js";
import { getSession } from "../models/session/SessionSchema.js";

import {
  createAccessJWT,
  verifyAccessJWT,
  verifyRefreshJWT,
} from "../utils/jwt.js";
import { responder } from "./response.js";

export const adminAuth = async (req, res, next) => {
  try {
    //get the accessJWT and verify
    const { authorization } = req.headers;
    const decoded = await verifyAccessJWT(authorization);

    if (decoded?.email) {
      //check if the token in  the db

      const token = await getSession({
        token: authorization,
        associate: decoded.email,
      });

      if (token?._id) {
        //get user by email

        const user = await getAUser({ email: decoded.email });
        console.log(user);
        // if (user?.status === "active" && user?.role === "admin") {
        user.password = undefined;
        req.userInfo = user;
        return next();
      }
    }

    responder.ERROR({
      res,
      message: "unauthorize",
      errorCode: 401,
    });
  } catch (error) {
    if (error.message.includes("jwt expired")) {
      return responder.ERROR({
        res,
        errorCode: 403,
        message: "jwt expired",
      });
    }

    next(error);
  }
};

export const refreshAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers; //refreshJWT

    const decoded = await verifyRefreshJWT(authorization);

    if (decoded?.email) {
      const user = await getAUser({
        email: decoded.email,
        refreshJWT: authorization,
      });

      if (user?._id && user?.status === "active") {
        const accessJWT = await createAccessJWT(decoded.email);

        return responder.SUCCESS({
          res,
          message: "here is the accessJWT",
          accessJWT,
        });
      }
    }

    responder.ERROR({
      res,
      errorCode: 401,
      message: "unauthorize",
    });
  } catch (error) {
    next(error);
  }
};
