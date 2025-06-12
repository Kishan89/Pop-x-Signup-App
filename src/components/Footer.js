import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaHome } from "react-icons/fa";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const [currentTime, setCurrentTime] = useState("");

    const formatDateTime = (date) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        };
        return date.toLocaleString("en-US", options);
    };

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(formatDateTime(new Date()));
        };
        updateTime();
        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    const pageMap = {
        "/": "1 of 4",
        "/signup": "2 of 4",
        "/signin": "3 of 4",
        "/account": "4 of 4",
    };

    return (
        <footer className="custom-footer">
            <div className="footer-left">
                <a
                    href="https://helpx.adobe.com/support/xd.html?sdid=YXPZG4ZY&mv=other"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="adobe-link"
                >
                    Made with Adobe XD
                </a>
                <img
                    src="/adobe.avif"
                    alt="Adobe XD"
                    className="adobe-logo"
                />
            </div>

            <div className="footer-center">
                <FaHome
                    className="footer-icon"
                    title="Home"
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate("/")}
                />
                <MdNavigateBefore
                    className="footer-icon"
                    title="Back"
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(-1)}
                />
                <span className="footer-page">{pageMap[currentPath] || ""}</span>
                <MdNavigateNext
                    className="footer-icon"
                    title="Next"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                        if (currentPath === "/signup") navigate("/signin");
                        else if (currentPath === "/signin") navigate("/account");
                        else navigate("/signup");
                    }}
                />
            </div>

            <div className="footer-right">
                {currentTime && <span>Link updated: {currentTime}</span>}
            </div>
        </footer>
    );
};

export default Footer;
