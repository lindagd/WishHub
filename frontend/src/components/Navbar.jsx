import React from "react"
import { Route, Routes, Link } from "react-router-dom"
import Home from "../pages/Home"

const Navbar = () => {
    return(
    <div className="border-b border-emerald-200 p-4">
        <nav className="flex justify-between">
            <Link to="/" className="text-emerald-500 font-bold">WishHub</Link>
            <div className="flex space-x-8">
                <Link to="/">Home</Link> 
                <Link to="/achievements">Achievements</Link>
            </div>
            <div className="flex space-x-4">
                <p>Username</p>
                <a className="text-rose-500">Logout</a>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;