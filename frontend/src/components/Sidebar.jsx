import React from "react"
import '../index.css'

const Sidebar = () => {
    return(
        <div className="flex w-1/5 p-4 bg-pink/30 border-2 border-pink rounded-lg text-white space-x-2">
            <img src="https://via.placeholder.com/100" alt="User" className="size-20 rounded-full" />
            <div className="flex flex-col items-center">
                <div className="text-xs text-pink">
                    <div className="text-lg font-bold text-blue">Username</div>  
                    <p>3 Pending Wishes</p>
                    <p>5 Completed Wishes</p>
                    <p>Total Spent: $500.00</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar