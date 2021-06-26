import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <div className="text-center footer">
                <p>
                    Developed & maintenance by{" "}
                    <i>
                        <a
                            target="_blank"
                            href="https://ghoshsaurav.netlify.app/"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}
                        >
                            Saurav Ghosh
                        </a>
                    </i>
                </p>
            </div>
        </div>
    );
};

export default Footer;
