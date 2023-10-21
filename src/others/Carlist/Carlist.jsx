import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Carproducts from "../Carproducts/Carproducts";
import Navbar from "../../components/Header/Navbar/Navbar";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import NoData from "../NoData/NoData";


const Carlist = () => {
    const {loading} = useContext(AuthContext);
    const [allData, setAlldata] = useState([])
    const carsData = useLoaderData();
    
    const { id } = useParams();

    const carData = carsData.find(mycar => mycar.id == id);
    
    const { slider_1, slider_2, slider_3 } = carData;
    
    console.log(id)
    useEffect(() => {
        fetch('https://cars-data-server-side.vercel.app/products')
            .then(res => res.json())
            .then(data => setAlldata(data))
    }, []);
    const singleProducts = allData.filter(singledata => singledata.brand == id);
    
    



    
    if(loading){
            return 'loading'
    }
    else if (singleProducts.length > 0) {
        return (
            <div>
                <div className="bg-blue-400">
                    <Navbar></Navbar>
                </div>
                {/* carousel */}
                <div className="md:px-64 px-0">
                    <div className="carousel w-screen md:w-full h-[40vh] md:h-[90vh] ">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={slider_1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn   w-6 h-6 md:w-12 md:h-12 btn-circle">❮</a>
                                <a href="#slide2" className="btn w-6 h-6 md:w-12 md:h-12 btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={slider_2} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn  w-6 h-6 md:w-12 md:h-12 btn-circle">❮</a>
                                <a href="#slide3" className="btn w-6 h-6 md:w-12 md:h-12 btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={slider_3} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn w-6 h-6 md:w-12 md:h-12 btn-circle">❮</a>
                                <a href="#slide1" className="btn w-6 h-6 md:w-12 md:h-12 btn-circle">❯</a>
                            </div>
                        </div>

                    </div>
                </div>
                {/* carousel end */}

                {/* four product here */}
                <div className="">
                    <h1 className=""></h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 px-14">
                        {
                            singleProducts.map((singleProduct, index) => <Carproducts key={index} singleProduct={singleProduct}></Carproducts>)
                        }
                    </div>



                </div>
            </div>
        );
    }
    else {
        return <NoData></NoData>
    }





};

export default Carlist;