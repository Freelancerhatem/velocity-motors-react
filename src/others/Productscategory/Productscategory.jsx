import { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";


const Productscategory = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(mydata => setProducts(mydata))


    }, [])
    

    return (
        <div>
            <div>
                <h1 className="text-center text-xl md:text-5xl font-extrabold mt-4">CHoose Your Brands</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto px-14 gap-8 my-4 md:my-16">
                {
                    products.map((categorydata, index) => <ProductCategory key={index} categorydata={categorydata}></ProductCategory>)
                }
            </div>
        </div>
    );
};

export default Productscategory;