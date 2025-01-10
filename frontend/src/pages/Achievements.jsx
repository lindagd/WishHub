import React from "react"
import AchievedWishesTable from '../components/AchievedWishesTable'
import Sidebar from '../components/Sidebar'

const Achievements = () => {
    return(
        <div className="flex flex-row my-10 justify-between">
            <Sidebar />
            <AchievedWishesTable />
        </div>
    )
}

export default Achievements;