import React from "react"
import { Route, Routes, Link } from "react-router-dom"
import Home from "../pages/Home"

const Navbar = () => {
    return(
    <div className="text-base border-b border-lightpink p-4">
        <nav className="flex justify-between">
            <Link to="/" className="text-pink font-bold">WishHub</Link>
            <div className="flex space-x-8">
                <Link to="/">Home</Link> 
                <Link to="/achievements">Achievements</Link>
            </div>
            <div className="flex space-x-4">
                {/* <p>Username</p> */}
                <a className="text-wine">Logout</a>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;