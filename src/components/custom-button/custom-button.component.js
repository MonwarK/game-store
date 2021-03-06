import React from 'react'
import "./custom-button.styles.scss"

function CustomButton({children, isGoogleSignIn, inverted, ...otherProps}) {
    return (
        <button className={
            `${ isGoogleSignIn ? 'google-sign-in' : ''} 
            custom-button ${ inverted ? 'inverted' : ''}`
            } {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
