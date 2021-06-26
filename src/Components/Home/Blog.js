import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
const Blog = ({ blog }) => {
    return (
        <div class="card mb-3">
            <Link to={`/blogDetail/${blog._id}`}>
                <img
                    src={`data:image/jpeg;base64,${blog.image.img}`}
                    class="card-img-top blog-image"
                    alt="..."
                />
            </Link>
            <div class="card-body">
                <Link to={`/blogDetail/${blog._id}`}>
                    <h5 class="card-title">{blog.title}</h5>
                </Link>
                <p class="card-text">
                    <small class="text-muted">
                        Posted on{" "}
                        <i>
                            <b>{blog.date}</b>
                        </i>
                    </small>
                </p>
            </div>
        </div>
    );
};

export default Blog;
