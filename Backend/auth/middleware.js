import JWT from "jsonwebtoken";
import User from "../services/users/model.js"

const verifyJWT = async (jwt) => {
    return new Promise((res, rej) => {
        JWT.verify(jwt, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                rej(err)
            } else {
                res(decoded)
            } 
        });
    }) 
}

export const authMiddleware = async (req, res, next) => {
    if (!req.headers["authorization"]) {
        return res.status(403).send({message: "forbidden"})
    }
    let authorization = req.headers["authorization"];
    let jwt = authorization.replace("Bearer ", "");
    try {
        let decoded = await verifyJWT(jwt);
        let user = await User.findById(decoded.id)
        req.user = user.toJSON();
        next()

    } catch (err) {
        res.status(400).send({message: err.message})
    }
    
}