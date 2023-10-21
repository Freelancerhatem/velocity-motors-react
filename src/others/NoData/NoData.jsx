import { Link } from "react-router-dom";


const NoData = () => {
    return (
        <div className="">
            <div className="md:mt-14 mt-5">
            <img src="https://i.ibb.co/T2MhMCq/20231021-132224.jpg" className="w-[30%] h-[30%] mx-auto" alt="" />
            <h1 className="text-center w-screen text-xl font-bold">This Product has not any data </h1>
            <div className="w-screen mx-auto  flex justify-center mt-4 gap-2">
            <Link to='/addproduct'>
            <button className="btn bg-blue-400 hover:bg-blue-500 text-white">Add Products</button>
            </Link>
            <Link to='/'>
            <button className="btn bg-blue-400 hover:bg-blue-500 text-white">Home</button>
            </Link>
            </div>
            </div>
        </div>
    );
};

export default NoData;