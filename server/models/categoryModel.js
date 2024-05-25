import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
    }
});

const categoryModel = mongoose.model("categories", categorySchema); // Use mongoose.model(), not mongoose.modelNames()

export default categoryModel;
