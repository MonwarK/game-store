import React from 'react'
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux"
import "./header.styles.scss"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

function Header({currentUser, hidden}) {
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
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div> 
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                }
                <CartIcon />
            </div>
            {
                hidden
                ?
                null
                :
                <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = ({users: {currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);