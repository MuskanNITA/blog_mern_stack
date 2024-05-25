
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",  // Corrected from "refer" to "ref"
    },
    thumbnail: {  // Corrected spelling from "thubnail" to "thumbnail"
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",  // Corrected from "refer" to "ref"
    },
});

const blogModel = mongoose.model("blogs", blogSchema);
export default blogModel;
