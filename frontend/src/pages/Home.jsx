import React from "react"
import WishesTable from '../components/WishesTable'
import Sidebar from '../components/Sidebar'

const Home = () => {
    return(
        <div className="flex flex-row my-10">
            <Sidebar />
            <WishesTable />
        </div>
    )
}

export default Home;