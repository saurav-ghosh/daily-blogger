import React from "react";
import "./TopHeader.css";

const TopHeader = () => {
    return (
        <div className="text-center mt-2 topHeader">
            <h1 className="topHeader-title">Daily Blogger</h1>
            <h4 className="topHeader-desc">
                A blogging website for blog lovers
            </h4>
        </div>
    );
};

export default TopHeader;
