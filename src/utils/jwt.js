import jwt from "jsonwebtoken";
import { createNewSession } from "../models/session/SessionSchema.js";
import { updateUser } from "../models/UserModel.js";

// create accessJWT
export const createAccessJWT = async (email) => {
  const accessJWT = jwt.sign({ email }, process.env.ACCESSJWT_SECRET, {
    expiresIn: "15m",
  });

  //store accessJWT in session table

  await createNewSession({
    token: accessJWT,
    associate: email,
  });

  return accessJWT;
};
// create accessJWT
export const verifyAccessJWT = async (accessJWT) => {
  return jwt.verify(accessJWT, process.env.ACCESSJWT_SECRET);
};

// create refreshJWT
export const createRefreshJWT = async (email) => {
  const refreshJWT = jwt.sign({ email }, process.env.REFRESHJWT_SECRET, {
    expiresIn: "30d",
  });

  // store in the user tale

  await updateUser(
    { email },
    {
      refreshJWT,
    }
  );
  return refreshJWT;
};

// create accessJWT
export const verifyRefreshJWT = async (refreshJWT) => {
  return jwt.verify(refreshJWT, process.env.REFRESHJWT_SECRET);
};

export const getJwts = async (email) => {
  return {
    accessJWT: await createAccessJWT(email),
    refreshJWT: await createRefreshJWT(email),
  };
};
