import React from 'react'
import "./Logo.css"
import image from './logo.png'

function Logo() {
    return (
        <div>
            <img className="Logotipo" src={image} alt="Logotipo"></img>
        </div>
    )
}

export default Logo
