import Navbar from "../../components/Header/Navbar/Navbar";


const UpdateData = () => {
    const handleUpdate =(e)=>{
        e.preventDefault();
        console.log('updated')
    }
    return (
        <div>
            <div className='bg-gray-500'>
                <Navbar></Navbar>
            </div>
            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-2 mt-12 w-full gap-12 px-14">


                    <div className="w-full ">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Image url</span>
                            </label>
                            <label className="input-group input-group-vertical">

                                <input type="text" name="image" placeholder="Image url of your product" className="input input-bordered focus:outline-none" />
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered focus:outline-none" />
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="number" name="price" placeholder="Product Price" className="input input-bordered focus:outline-none" />
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="rating" placeholder="Product Rating" className="input input-bordered focus:outline-none" />
                            </label>
                        </div>

                    </div>


                    <div className="w-full">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Brand Name</span>
                            </label>
                            <label className="input-group input-group-vertical">

                                <input type="text" name="brand" placeholder="Brand Name" className="input  input-bordered focus:outline-none" />
                            </label>
                        </div>
                        <div className="w-full  ">
                            <label className="label">
                                <span className="label-text font-bold">Type</span>
                            </label>
                            <label className="input-group border rounded-b-md   input-group-vertical">
                                <select name="type" id="">
                                    <option value="car">Car</option>
                                    <option value="computer">Computer</option>
                                    <option value="headphone">Headphone</option>
                                </select>

                            </label>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold">Short Description</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name="st_description" placeholder="Short Description" className="input input-bordered focus:outline-none" />
                            </label>
                        </div>


                    </div>





                </div>
                <div className="px-14 mt-6">
                    <button type="submit" className="btn btn-primary w-full">Add Product</button>

                </div>
            </form>
        </div>
    );
};

export default UpdateData;