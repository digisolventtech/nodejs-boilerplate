import JWT from "jsonwebtoken";

export const createToken = (payload) => {
//   console.log("payload is: ", payload, process.env.JWT_TOKEN_EXPIRE_TIME);
  return JWT.sign(payload, process.env.JWT_TOKEN_KEY || "11XS#@QWEREF", {
    algorithm: process.env.JWT_TOKEN_ALGO || "HS256",
    expiresIn: process.env.JWT_TOKEN_EXPIRE_TIME || 60 * 60,
  });
};

export const decodeToken = (token) => {
  try {
    return JWT.verify(token, process.env.JWT_TOKEN_KEY || "11XS#@QWEREF");
  } catch (err) {
    // console.log("Token error: ", err);
    throw err;
  }
};
