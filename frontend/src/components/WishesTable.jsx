import React from "react"
import { Link } from "react-router-dom"

const WishesTable = () => {
    let wishes = [
        {title: "wish 1", category: 'Category 1', link: "https://example.com/wish-1-gimme", price: 200.00, status: 'pending'},
        {title: "wish 2", category: 'Category 2', link: "https://example.com/wish-2-gimme", price: 400.00, status: 'pending'},
        {title: "wish 3", category: 'Category 1', link: "https://example.com/wish-3-gimme", price: 200.00, status: 'pending'}
    ]

    return(
     <div className="w-3/4">
        <h2 className="text-xl text-center font-bol text-blue border-blue">Current Wishes</h2>
        <table className="w-full table-auto mt-4">
            {/* <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Link</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            </thead> */}
            <tbody>
                {wishes.map((w, index) => (
                    <tr key={index} className="odd:border-pink odd:text-pink odd:bg-pink/15
                                                even:text-blue even:border-blue even:bg-blue/15
                                                border-l-2">
                        <td className="px-4 py-2">{w.title}</td>
                        <td>{w.category}</td>
                        <td><a href={w.link} className="underline decoration-wavy hover:decoration-sky-500">View product</a></td>
                        <td>${w.price.toFixed(2)}</td>
                        <td><Link to="/wish/1/edit">Edit</Link></td>
                        <td><Link to="/wish/1/delete">Delete</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
     </div>   
    )
}

export default WishesTable