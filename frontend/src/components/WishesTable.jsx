import React from "react"

const WishesTable = () => {
    let wishes = [
        {title: "wish 1", category: 'Category 1', link: "https://example.com/wish-1-gimme", price: 200.00, status: 'pending'},
        {title: "wish 2", category: 'Category 2', link: "https://example.com/wish-2-gimme", price: 400.00, status: 'pending'},
        {title: "wish 3", category: 'Category 1', link: "https://example.com/wish-3-gimme", price: 200.00, status: 'pending'}
    ]

    return(
     <div>
        <h2>Current Wishes</h2>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Link</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {wishes.map((w, index) => (
                    <tr key={index}>
                        <td>{w.title}</td>
                        <td>{w.category}</td>
                        <td><a href={w.link}>{w.link}</a></td>
                        <td>{w.price.toFixed(2)}</td>
                        <td>{w.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
     </div>   
    )
}

export default WishesTable