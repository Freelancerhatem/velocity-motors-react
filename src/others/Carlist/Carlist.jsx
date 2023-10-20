import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Carproducts from "../Carproducts/Carproducts";


const Carlist = () => {
    const[allData,setAlldata] = useState([])
    const carsData = useLoaderData();
    const { id } = useParams();

    const carData = carsData.find(mycar => mycar.id == id);
    const { slider_1, slider_2, slider_3 } = carData;
    console.log(id)
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setAlldata(data))
    },[]);
    const singleProducts = allData.filter(singledata=>singledata.brand==id);
    console.log(singleProducts)

    return (
        <div>
            {/* carousel */}
            <div className="px-64 border">
                <div className="carousel w-full h-[90vh] ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slider_1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={slider_2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={slider_3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>
            {/* carousel end */}

            {/* four product here */}
            <div className="grid grid-cols-4 gap-10 mt-20 px-14">
                {
                    singleProducts.map((singleProduct,index)=><Carproducts key={index} singleProduct={singleProduct}></Carproducts>)
                }
                

            </div>
        </div>
    );
};

export default Carlist;