import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  console.log("AUTHORIZATION", req.header("Authorization"));
  try {
    let token = req.header("Authorization");
    if (!token) {
      return res.status(403).send("Access Denied");
    }
    if (token && token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();

      const verified = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
      console.log("VERIFY-token", verified);
      next();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
