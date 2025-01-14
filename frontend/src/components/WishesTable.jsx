import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAchievedWishes, getPendingWishes, markAsAchieved, updateWish } from "../services/api"
import NewWishForm from "./NewWishForm";
import DeleteWishButton from "./DeleteWishButton";

const WishesTable = () => {
    const [wishes, setWishes] = useState([]);
    const [editingWishId, setEditingWishId] = useState(null);
    const [editValues, setEditValues] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPendingWishes();
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

    const handleEditClick = (wish) => {
        setEditingWishId(wish.id);
        setEditValues({ ...wish });
    }

    const handleSaveEdit = async () => {
        await updateWish(editingWishId, editValues);
        setWishes((prevWishes) => 
            prevWishes.map(wish => wish.id === editingWishId ? { ...wish, ...editValues } : wish)
        );
        setEditingWishId(null);
    }

    const handleDeleteWish = async (wishId) => {
        setWishes((prevWishes) => prevWishes.filter((w) => w.id !== wishId));
    }
    
    return(
     <div className="w-2/3 mx-auto">
        <h2 className="text-2xl text-center font-display font-bold text-blue border-blue mb-4">Current Wishes</h2>
        { wishes.length == 0 ? (
            <p className="text-center text-gray-800">
                You have no pending wishes at the moment. Add a wish to your list.
            </p>
            ):(
            <table className="w-full table-fixed border-collapse bg-white shadow-lg rounded-md overflow-hidden">
                <tbody>
                    {wishes.map((w) => (
                        <tr key={w.id} className="odd:bg-pink/15
                                                  even:bg-blue/15
                                                  transition duration-700 ease-in-out
                                                  hover:odd:bg-pink/30
                                                  hover:even:bg-blue/30">

                            {editingWishId === w.id ? (
                                <>
                                <td className="px-4 py-2">
                                    <input type="text"
                                            defaultValue={w.title}
                                            className="w-full border border-gray-400 rounded-md
                                                        focus:outline-none focus:border-pink
                                                        focus:ring-1 focus:ring-pink px-2 py-1" 
                                            onChange={e => setEditValues((prev) => ({
                                                ...prev,
                                                title: e.target.value
                                            }))} />
                                </td>
                                <td className="px-4 py-2">
                                    <input type="text"
                                            defaultValue={w.category}
                                            className="w-full border border-gray-400 rounded-md
                                                        focus:outline-none focus:border-pink
                                                        focus:ring-1 focus:ring-pink px-2 py-1" 
                                            onChange={e => setEditValues((prev) => ({
                                                ...prev,
                                                category: e.target.value
                                            }))} />
                                </td>
                                <td className="px-4 py-2 w-52">
                                    <input type="url"
                                            defaultValue={w.link}
                                            className="w-full border border-gray-400 rounded-md
                                                        focus:outline-none focus:border-pink
                                                        focus:ring-1 focus:ring-pink px-2 py-1" 
                                            onChange={e => setEditValues((prev) => ({
                                                ...prev,
                                                link: e.target.value
                                            }))} />
                                </td>
                                <td className="px-4 py-2">
                                    <input type="number"
                                            defaultValue={w.price}
                                            className="w-full border border-gray-400 rounded-md
                                                        focus:outline-none focus:border-pink
                                                        focus:ring-1 focus:ring-pink px-2 py-1" 
                                            onChange={e =>
                                                setEditValues((prev) => ({
                                                    ...prev,
                                                    price: parseFloat(e.target.value) || 0,
                                                }))} />
                                </td>
                                <td className="px-4 py-2">
                                    <button onClick={() => handleSaveEdit()}
                                            className="px-2 py-1 w-full bg-blue/80 text-white rounded-md
                                                        hover:bg-blue transition duration-300">
                                        Save changes
                                    </button>
                                </td>
                                <td className="px-4 py-2">
                                    <button onClick={() => {
                                            setEditingWishId(null);
                                            setEditValues({});
                                    }}
                                            className="px-2 py-1 w-full text-white rounded-md bg-red-600
                                                       hover:bg-red-700 transition duration-300">
                                        Cancel
                                    </button>
                                </td>
                                </>
                            ) : (
                                <>
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
                                
                                <td className="text-xs">
                                    <button onClick={() => handleMarkAsAchieved(w.id)}
                                            className="py-1 px-2 rounded-md bg-green-600 text-white
                                                    hover:bg-green-700 transition duration-200">
                                        Mark as achieved
                                    </button>
                                </td>
                                <td className="px-4 py-2">
                                    <button onClick={() => handleEditClick(w)}
                                            className="text-green-600 hover:underline mr-4">
                                        Edit
                                    </button>

                                    <DeleteWishButton wishId={w.id} onDelete={handleDeleteWish} />
                                </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
        <NewWishForm onAddWish={handleAddWish}/>
     </div>   
    )
}

export default WishesTable