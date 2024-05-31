import jwt from "jsonwebtoken";

export const generateJWT = async (payload) => {
    return new Promise((res, rej) =>
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: "1 day" },
          (err, token) => {
            if (err) rej(err)
            else res(token)
          }
        )
      )
}