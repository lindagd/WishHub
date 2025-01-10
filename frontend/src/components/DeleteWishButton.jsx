import React from "react"
import { deleteWish } from "../services/api"

const DeleteWishButton = ({wishId, onDelete}) => {
    const handleDeleteWish = async () => {
        if (!window.confirm("Are you sure you want to delete this wish?")) return;
        await deleteWish(wishId);
        onDelete(wishId);
    }

    return (
        <button onClick={() => handleDeleteWish()}
                className="text-red-600 hover:underline">
            Delete
        </button>
    )
}

export default DeleteWishButton