import express from "express";
import AuthController from "../controllers/authcontroller.js";
import BlogController from "../controllers/blogcontroller.js";
import CategoryController from "../controllers/categorycontroller.js";
import multer from "multer";   // for file upload feature;
import checkIsUserAuthenticated from "../middlewares/authMiddleware.js";
const storage =multer.diskStorage({
    destination:function(req,file,cb) {
       cb(null,`public/upload/`) ;
    },
    filename: function (req,file,cb) {
        cb(null,`${Data.now()}-${file.originalname}`);
    },
});

const upload=multer({storage:storage});



const router =express.Router();

router.post("/user/register",AuthController.userRegisteration);
router.post("/user/login",AuthController.userLogin);

//protected routes...blogs

router.get("/get/allblogs", checkIsUserAuthenticated,BlogController.getAllBlogs);
router.post("/add/blog",checkIsUserAuthenticated,upload.single("thumbnail") , BlogController.addNewBlog);
router.get("/get/blog/:id", checkIsUserAuthenticated,BlogController.getSingleBlog );

//for category
router.get("/get/categories",checkIsUserAuthenticated, CategoryController.getAllCategories);
router.post("/add/category",checkIsUserAuthenticated, CategoryController.addNewCategory);



export default router ;