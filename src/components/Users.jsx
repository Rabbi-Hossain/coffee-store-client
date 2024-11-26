import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {

    const loaderUsers = useLoaderData()
    const [users, setUsers] = useState(loaderUsers)


    const handleDelete = id => {
        console.log(id)
        fetch(`https://coffe-server-desthmeiy-rabbi-hossains-projects-5ba9f176.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = users.filter(user => user._id !== id)
                setUsers(remaining)
            })
    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>CreationTime</th>
                            <th> lastSignInTime</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user) => (
                            <tr key={user._id}>
                                <th>{1}</th>
                                <td>{user.email}</td>
                                <td>{user.creationTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td><button onClick={() => handleDelete(user._id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;