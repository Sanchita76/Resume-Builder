const express=require('express');
const app = express();

app.use(express.json()); // <-- This line is required!
const {registerUser , loginUser , getUserProfile}=require("../controllers/authController");
const {protect} =require("../middlewares/authMiddleware");
const upload=require('../middlewares/uploadMiddleware');

const router=express.Router();

//Auth Routes
router.post("/register",registerUser); //Register User
router.post("/login",loginUser); //Login User
router.get("/profile",protect,getUserProfile); //Get User Profile

router.post("/upload-image", upload.single("image"), (req,res)=>{
    if(!req.file){
        return res.status(400).json({message:"No file uploaded"});
    }
    // const imageUrl=`${req.protocol}://${req.get("host")}/uploads/${
    //     req.file.filename
    // }`;
    // const imageUrl = `https://resume-builder-ujy5.onrender.com/uploads/${req.file.filename}`;

    // res.status(200).json({imageUrl});

    // Use BASE_URL from .env for correct deployed domain
  const baseUrl = process.env.BASE_URL || `${req.protocol}://${req.get("host")}`;
  const imageUrl = `${baseUrl}/uploads/${req.file.filename}`;

  res.status(200).json({ imageUrl });
});

module.exports=router;