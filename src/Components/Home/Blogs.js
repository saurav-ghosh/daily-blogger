import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import "./Blogs.css";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://aqueous-sierra-65568.herokuapp.com/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    });
    return (
        <div className="blog-container">
            {blogs.map((blog) => (
                <Blog blog={blog} key={blog._id} />
            ))}
        </div>
    );
};

export default Blogs;
