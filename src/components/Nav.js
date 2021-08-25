import React from 'react'
import "./Nav.css"

function Nav() {
    return (
        <div>
        <nav className="navbar">
            <div className="logo">Website name</div>
            <div className="list__items">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </nav>
            
        </div>
    )
}

export default Nav
