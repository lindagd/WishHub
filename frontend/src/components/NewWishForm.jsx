import React, { useState } from "react"
import { createWish } from "../services/api";

const NewWishForm = ({ onAddWish }) => {
    const [newWish, setNewWish] = useState({
        title: '',
        category: '',
        link: '',
        price: '',
    });
    const [error, setError] = useState(null);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setNewWish((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newWishData = {
            title: newWish.title,
            category: newWish.category,
            link: newWish.link,
            price: parseFloat(newWish.price),
        };

        try {
            const createdWish = await createWish(newWishData);
            onAddWish(createdWish);
            setNewWish({ title: '', category: '', link: '', price: '' });
        } catch (error) {
            setError("Error creating the wish.:")
        }
    }

    return (
        <div className="border-t mt-4 pt-4">
            <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-4 mt-4">
                <input type="text" name="title" value={newWish.title} onChange={handleInput}
                       className="border px-2 py-1 w-full rounded-md
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                       placeholder="Title"
                       required
                />
                <input type="text" name="category" value={newWish.category} onChange={handleInput}
                       className="border px-2 py-1 w-full rounded-md
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                       placeholder="Category. eg.: Eletronics"
                       required
                />
                <input type="url" name="link" value={newWish.link} onChange={handleInput}
                       className="border px-2 py-1 w-full rounded-md
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                  invalid:border-pink-500 invalid:text-pink-600"
                       placeholder="Link"
                       required
                />
                <input type="number" name="price" value={newWish.price} onChange={handleInput}
                       className="border px-2 py-1 w-full rounded-md
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                       placeholder="Price"
                       required
                />
                <button type="submit"
                        className="px-4 py-2 w-full bg-blue/80 text-white rounded-md
                                   
                                   hover:bg-blue transition duration-300">
                    Add wish
                </button>
            </form>
            {error && <p className="text-center text-red-500 mt-2">{error}</p>}
        </div>
    );
}

export default NewWishForm