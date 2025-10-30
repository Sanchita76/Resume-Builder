const User=require("../Models/User");
const  bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const express = require('express');
const app = express(); //May not need

//May not need
app.use(express.json()); // <-- This line is required!

//Generate JWT Token
const generateToken=(userId)=>{
    return jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:"7d"});
}

//@desc Register a anew user
//@route POST/api/auth/register
//@access Public
const registerUser=async(req,res)=>{
    try{

        // console.log('Request body:', req.body); // Debug line
        const{name,email,password,profileImageUrl}=
        req.body;

        //Check if user already registered
        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists."})
        }

        //Hash password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        //Create new user
        const user=await User.create({
            name,
            email,
            password:hashedPassword,
            profileImageUrl
        });

        //Return user data with JWT
        return res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            profileImageUrl:user.profileImageUrl,
            token:generateToken(user._id),
        });
    }catch(error){
        res.status(500).json({message:"Server error",error:error.message});
    }
}

//@desc Login user
//@route POST/api/auth/login
//@access Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const token = generateToken(user._id);

    // ✅ Store token securely in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,       // Works on HTTPS (Netlify/Vercel)
      sameSite: "none",   // Allow cross-site cookies
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // ✅ Send only user info
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


//@desc Get user profile
//@route GET/api/auth/profile
//@access Private(Requires JWT)
const getUserProfile=async (req,res)=>{
    try{
        const user=await User.findById(req.user.id).select("-password");
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.json(user);
    }catch(error){
        res.status(500).json({message:"Server error",error:error.message});
    }
};

module.exports={registerUser,loginUser,getUserProfile}; 