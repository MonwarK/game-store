import React from "react";
import "./homepage.styles.scss";

const Homepage = () => {
    return(
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <div className="title">PC</div>
                        <span className="subtitle">SHOP NOW</span>                    
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <div className="title">XBOX</div>
                        <span className="subtitle">SHOP NOW</span>                    
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <div className="title">PLAYSTATION</div>
                        <span className="subtitle">SHOP NOW</span>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;