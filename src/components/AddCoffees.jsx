
const AddCoffees = () => {


    const handleAddCoffee = e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chep = form.chep.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const addCoffees = {name, chep,supplier, taste, category, details, photo}
        console.log(addCoffees)

        fetch('https://coffe-server-desthmeiy-rabbi-hossains-projects-5ba9f176.vercel.app/coffees',{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(addCoffees)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <div className="bg-[#F4F3F0] m-12 p-10">
            <h3 className="text-center my-6">Add a New Coffee Page</h3>

            <form onSubmit={handleAddCoffee}>
                {/* name and chep */}
                <div className="flex mb-6">
                    <div className="md:w-1/2">
                        <label className=" gap-2">
                            <p>Name</p>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Coffee name"
                            className="input input-bordered  w-full " />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className=" gap-2">
                            <p>Chep</p>
                        </label>
                        <input
                            type="text"
                            name="chep"
                            placeholder="chep"
                            className="input input-bordered w-full " />
                    </div>
                </div>
                {/* supplier and teast */}
                <div className="flex mb-6">
                    <div className="md:w-1/2">
                        <label className=" gap-2">
                            <p>Supplier</p>
                        </label>
                        <input
                            type="text"
                            name="supplier"
                            placeholder="supplier"

                            className="input input-bordered  w-full " />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className=" gap-2">
                            <p>Taste</p>
                        </label>
                        <input
                            type="text"
                            placeholder="teast"
                            name="taste"
                            className="input input-bordered w-full " />
                    </div>
                </div>
                {/* Category and Details */}
                <div className="flex mb-6">
                    <div className="md:w-1/2">
                        <label className=" gap-2">
                            <p>Category</p>
                        </label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            className="input input-bordered  w-full " />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className=" gap-2">
                            <p>Details</p>
                        </label>
                        <input
                            type="text"
                            placeholder="Details"
                            name="details"
                            className="input input-bordered w-full " />
                    </div>
                </div>
                {/* Category and Details */}
                <div className=" mb-6">
                    <div >
                        <label className=" gap-2">
                            <p>Photo Url</p>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo Url"
                            className="input input-bordered  w-full " />
                    </div>
                    
                </div>
            
                <input type="submit" value="Add Coffee"  className="btn mt-10 btn-block"/>
            </form>
        </div>
    );
};

export default AddCoffees;