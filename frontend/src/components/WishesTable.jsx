import React from "react"
import { Link } from "react-router-dom"

const WishesTable = () => {
    let wishes = [
        {id: 1, title: "wish 1", category: 'Category 1', link: "https://example.com/wish-1-gimme", price: 200.00, status: 'pending'},
        {id: 2, title: "wish 2", category: 'Category 2', link: "https://example.com/wish-2-gimme", price: 400.00, status: 'pending'},
        {id: 3, title: "wish 3", category: 'Category 1', link: "https://example.com/wish-3-gimme", price: 200.00, status: 'pending'}
    ]

    return(
     <div className="w-2/3 mx-auto">
        <h2 className="text-2xl text-center font-bol text-blue border-blue mb-4">Current Wishes</h2>
        <table className="w-full table-auto border-collapse bg-white shadow-lg rounded-md overflow-hidden">
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
                {wishes.map((w) => (
                    <tr key={w.id} className="odd:bg-pink/15
                                              even:bg-blue/15
                                              hover:bg-gray-200">
                        <td className="px-4 py-2">{w.title}</td>
                        <td className="px-4 py-2">{w.category}</td>
                        <td className="px-4 py-2"><a href={w.link} className="underline decoration-wavy
                                                        hover:decoration-sky-500"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                View product
                            </a>
                        </td>
                        <td className="px-4 py-2 ">${w.price.toFixed(2)}</td>
                        <td className="px-4 py-2"><Link to={`/wish/${w.id + 1}/edit`}
                                className="text-green-600 hover:underline mr-4">Edit</Link>
                        <Link to={`/wish/${w.id + 1}/delete`}
                                className="text-red-600 hover:underline">Delete</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
     </div>   
    )
}

export default WishesTable