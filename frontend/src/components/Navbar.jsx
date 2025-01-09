import React from "react"
import { Route, Routes, Link } from "react-router-dom"
import Home from "../pages/Home"

const Navbar = () => {
    return(
    <div>
        <nav>
            <Link to="/">Home</Link> 
            <Link to="/achievements">Achievements</Link>
        </nav>
    </div>
    )
}

export default Navbar;