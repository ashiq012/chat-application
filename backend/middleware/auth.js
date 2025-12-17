import jwt from 'jsonwebtoken'
const isAuthenticated = async(req,res,next) => {
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(404).json({
                success:false,
                message:"Unautherized user or token not valid"
            })
        }
        const decode = await jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"token is invalid"
            })
        }
        res.user = decode.userId;
        console.log(res.user)
        next();
    } catch (error) {
        console.log(error)
    }
}
export default isAuthenticated;