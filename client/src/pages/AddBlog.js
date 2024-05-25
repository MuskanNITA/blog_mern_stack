import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [file, setFile] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/v1/get/categories", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchAllCategories();
  }, []);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("category", input.category);
    formData.append("description", input.description);
    formData.append("thumbnail", file);

    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/add/blog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="container shadow">
      <h2 className="text-center my-3">Add a New Blog</h2>
      <div className="col-xl-12 my-3 d-flex items-center justify-content-center">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={input.title}
                onChange={handleChange}
                className="form-control"
                id="title"
                placeholder="Blog Title"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-control"
                name="category"
                value={input.category}
                onChange={handleChange}
                id="category"
               required
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories&& categories.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                value={input.description}
                onChange={handleChange}
                placeholder="Blog Description"
                className="form-control"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="thumbnail" className="form-label">
                Thumbnail
              </label>
              <input
                type="file"
                name="thumbnail"
                onChange={handleFileChange}
                className="form-control"
                id="thumbnail"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Add Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
