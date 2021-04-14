  
import React from 'react';
import "../Styles/TopBar.css";

function TopBar() {
    return (
        <header>
            <div className="top-bar">
                <div>
                <a href="">Home</a>
                <span className="vertical-line"> | </span>
                <a href="">About Me</a>
                <span className="vertical-line"> | </span>
                <a href="">Contact Me</a>
                </div>
            <a href="" className="right-positioned">Login</a>
            </div>
        </header>
    );
}

export default TopBar;