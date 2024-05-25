/*import  jwt from "jsonwebtoken";
import authModel from "../models/authmodel.js";

const checkIsUserAuthenticated =async(req,res,next)=>{
    let token;
    const {authorization }=req.headers;
    if(authorization &&authorization.startsWith("Bearer")){
        try {
            token=authorization.split("")[1];
            //verify token
            const{userID}= jwt.verify(token,"pleaseSubscribe");
            //get user from token
            req.user=await authModel.findById(userID).select("--password");
            next();
            
        } catch(error){
            return res.status(401).json({message:"unAuthorized User"});
        }
    } else{
        return res.status(401).json({message:"unAuthorized User"});
    }
};
export default checkIsUserAuthenticated;*/
import jwt from "jsonwebtoken";
import authModel from "../models/authmodel.js";

const checkIsUserAuthenticated = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith("Bearer ")) {
    try {
      token = authorization.split(" ")[1];  // Corrected split logic
      // Verify token
      const { userID } = jwt.verify(token, "pleaseSubscribe");
      // Get user from token
      req.user = await authModel.findById(userID).select("--password");  // Corrected select logic
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized User" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized User" });
  }
};

export default checkIsUserAuthenticated;
