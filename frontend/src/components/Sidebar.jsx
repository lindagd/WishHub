import React, { useEffect, useState } from "react"
import '../index.css'
import { getAchievedWishesCount, getPendingWishesCount } from "../services/api"

const Sidebar = () => {
    const [pendingCount, setPendingCount] = useState(0)
    const [achievedCount, setAchievedCount] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const pending = await getPendingWishesCount()
            setPendingCount(pending)
            const achieved = await getAchievedWishesCount()
            setAchievedCount(achieved)
        }
        fetchData();
    }, [])

    return(
        <div className="flex flex-wrap items-center w-1/5 h-fit p-4 bg-pink/20 rounded-md shadow-md text-gray-800 space-x-2">
            <img src="https://via.placeholder.com/100" alt="User" className="size-24 rounded-full border-2 border-pink/50 shadow-sm" />
            <div className="flex flex-col items-center">
                <div>
                    <div className="text-lg font-sans font-bold text-pink
                                    transition=all duration-700 ease-in-out hover:tracking-widest">
                        Username
                    </div>  
                    <div className="text-xs space-y-2">
                       <p className="font-sans">{pendingCount} Pending Wishes</p>
                        <p>{achievedCount} Completed Wishes</p>
                        <p className="font-semibold text-blue">Total Spent: $500.00</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar