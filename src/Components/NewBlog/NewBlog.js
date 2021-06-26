import React from "react";
import { useForm } from "react-hook-form";
import "./NewBlog.css";

const NewBlog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);
        formData.append("title", data.title);
        formData.append("desc", data.desc);
        formData.append("date", new Date().toDateString());

        fetch("http://localhost:5050/publishBlog", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    alert("new blog published successfully");
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h3 className="publish-blog">Publish A Blog</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">Add title</label>
                <input
                    className="form-control input-field"
                    placeholder="Add title..."
                    name="title"
                    {...register("title", { required: true })}
                />
                {errors.title && (
                    <span className="text-danger">Title is required</span>
                )}{" "}
                <br />
                <label htmlFor="desc">Add description</label>
                <textarea
                    rows="4"
                    className="form-control"
                    placeholder="Add desc..."
                    name="desc"
                    {...register("desc", { required: true })}
                />
                {errors.desc && (
                    <span className="text-danger">Description is required</span>
                )}{" "}
                <br />
                <label htmlFor="image">Upload image</label>
                <input
                    className="form-control"
                    name="image"
                    type="file"
                    {...register("file", { required: true })}
                />
                {errors.file && (
                    <span className="text-danger">image is required</span>
                )}{" "}
                <br />
                <input
                    className="btn btn-primary form-control"
                    value="Publish Blog"
                    type="submit"
                />
            </form>
        </div>
    );
};

export default NewBlog;
