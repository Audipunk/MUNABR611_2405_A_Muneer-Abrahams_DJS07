import React from "react"
import Header from ",/components/Header"

export default function Header() {
    return (
        <header className="header">
            <img 
            src="./public\vite.svg" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React - Project - DJS-07</h4>
        </header>
    )
}