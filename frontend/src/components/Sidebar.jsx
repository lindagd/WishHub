import React from "react"
import '../index.css'

const Sidebar = () => {
    return(
        <div className="flex w-1/4 p-2 border-l-2 border-emerald-200 space-x-2">
            <img src="https://via.placeholder.com/100" alt="User" className="size-20 rounded-full" />
            <div className="flex flex-col items-center">
                <div className="text-sm">
                    <div className="text-lg font-bold">Username</div>  
                    <p>3 Pending Wishes</p>
                    <p>5 Completed Wishes</p>
                    <p>Total Spent: $500.00</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar