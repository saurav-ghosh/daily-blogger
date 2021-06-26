import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";

const BlogDetail = () => {
    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5050/blogDetail/${id}`)
            .then((res) => res.json())
            .then((data) => setBlogDetail(data));
    });

    return (
        <>
            <div className="blogDetail-image">
                <img
                    className="img-fluid "
                    src={`data:image/jpeg;base64,${blogDetail.image.img}`}
                    alt="..."
                />
            </div>
            <p>{blogDetail.desc}</p>
        </>
    );
};

export default BlogDetail;
