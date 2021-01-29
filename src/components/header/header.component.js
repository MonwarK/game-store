import React from 'react'
import {Link} from "react-router-dom";
import "./header.styles.scss"

function Header() {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img className="logo" src="https://media.discordapp.net/attachments/733304169833955338/802580415348211722/7e7bd8f5c72cd491f6e380901dfeb1c7_-_Copy.png?width=1031&height=676" alt="Golden Rhino Logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;
