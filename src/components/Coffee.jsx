import { Link } from "react-router-dom";

const Coffee = ({ user, users, setUsers }) => {

    const { _id, name, chep, supplier, taste, category, details, photo } = user

    const handleDelete = _id=>{
        console.log(_id)
        fetch(`https://coffe-server-desthmeiy-rabbi-hossains-projects-5ba9f176.vercel.app/coffees/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const remaining = users.filter(us=>us._id !== _id)
            setUsers(remaining)
        })
    }

    return (
        <div className="w-full">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className=" flex justify-between items-center w-full">
                    <div className="ml-4">
                        <h2 className="card-title">Name:{name}</h2>
                        <p>chep:{chep}</p>
                        <p>taste:{taste}</p>
                    </div>
                    <div className="mr-4">
                        <div className="join join-vertical space-y-3">
                            <button className="btn join-item">Get</button>
                            <Link to={`/updatecoffee/${_id}`}><button className="btn join-item">Update</button></Link>
                            <button onClick={()=>handleDelete(_id)} className="btn join-item">Delet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;