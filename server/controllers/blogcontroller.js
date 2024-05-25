import blogModel from "../models/blogmodel.js";
class BlogController{
    static getAllBlogs=async(req,res)=>{
       // res.send("get All Blogs");
       try {
        const fetchAllBlogs=await blogModel.find({user:req.user._id});
        return res.status(200).json(fetchAllBlogs);
        
       } catch (error) {
        return res.status(400).json({message : error.message});
       }
    };

    static addNewBlog = async (req, res) => {
      const { title, category, description } = req.body;
      try {
        if (title && category && description) {
          if (!req.file) {
            return res.status(400).json({ message: "Thumbnail file is required" });
          }
    
          const addBlog = new blogModel({
            title: title,
            description: description,
            category: category,
            thumbnail: req.file.filename,
            user: req.user._id,
          });
    
          const savedBlog = await addBlog.save();
          if (savedBlog) {
            return res.status(200).json({ message: "Blog added successfully" });
          } else {
            throw new Error("Failed to save blog");
          }
        } else {
          return res.status(400).json({ message: "All fields are required" });
        }
      } catch (error) {
        console.error("Error adding blog:", error);
        return res.status(500).json({ message: "An error occurred while adding the blog" });
      }
    };

    static getSingleBlog=async(req,res)=>{
       // res.send("get Single Blogs");
       const {id}=req.params;
       try {
        if(id){

            const fetchAllBlogsById=await blogModel.findById(id);
            return res.status(200).json(fetchAllBlogsById);
            
        } else{
            return res.status(400).json({message : "invalid URL"});
        }
        
       } catch (error) {
        return res.status(400).json({message : error.message});
       }
    };
}

export default BlogController;