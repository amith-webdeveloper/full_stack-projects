import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userid , res) => {
    const token = jwt.sign({userid}, process.env.JWT_SECRET,{
        expiresIn:'15d',
    })

    res.cookie("jwt" , token , {
        httpOnly:true, // more secure
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite:"strict",
    })

    return token



}

export default generateTokenAndSetCookie;