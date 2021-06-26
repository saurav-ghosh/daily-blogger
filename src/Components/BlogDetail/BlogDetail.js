import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";

const BlogDetail = () => {
    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState({});
    useEffect(() => {
        fetch(`https://aqueous-sierra-65568.herokuapp.com/blogDetail/${id}`)
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
