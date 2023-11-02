import React from "react"
import logo from "../images/globe.png"
export default function Header(){
    return(
    <header className="header-container">
            <img className={logo} src="globe.png" />
            <p>my travel journal.</p>
    </header>
    )
}