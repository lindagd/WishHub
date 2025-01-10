import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAchievedWishes, getPendingWishes, markAsAchieved } from "../services/api"
import NewWishForm from "./NewWishForm";

const AchievedWishesTable = () => {
    const [wishes, setWishes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAchievedWishes();
            setWishes(data);
        }
        fetchData();
    }, []);

    const handleAddWish = (newWish) => {
        setWishes((prevWishes) => [...prevWishes, newWish]);
    };

    const handleMarkAsAchieved = async (wishId) => {
        await markAsAchieved(wishId);
        setWishes((prevWishes) => prevWishes.filter((w) => w.id !== wishId));
    }
    
    return(
     <div className="w-2/3 mx-auto">
        <h2 className="text-2xl text-center font-display font-bold text-blue border-blue mb-4">Achieved Wishes</h2>
        { wishes.length == 0 ? (
            <p className="text-center text-gray-800">
                You have no achieved wishes at the moment. Don't be sad. You'll get there!
            </p>
            ):(
            <table className="w-full table-auto border-collapse bg-white shadow-lg rounded-md overflow-hidden">
                <tbody>
                    {wishes.map((w) => (
                        <tr key={w.id} className="odd:bg-pink/15
                                                  even:bg-blue/15
                                                  transition duration-700 ease-in-out
                                                  hover:bg-lightpink/50">
                            <td className="px-4 py-2">{w.title}</td>
                            <td className="px-4 py-2">{w.category}</td>
                            <td className="px-4 py-2"><a href={w.link} className="underline decoration-wavy
                                                            transition duration-700 ease-in-out
                                                            hover:text-pink
                                                            hover:decoration-sky-500"
                                                            target="_blank"
                                                            rel="noopener noreferrer">
                                    View product
                                </a>
                            </td>
                            <td className="px-4 py-2 ">${w.price.toFixed(2)}</td>
                            
                            <td className="px-4 py-2">
                                <Link to={`/wish/${w.id + 1}/delete`}
                                        className="text-red-600 hover:underline">Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
     </div>   
    )
}

export default AchievedWishesTable