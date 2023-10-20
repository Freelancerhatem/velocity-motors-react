import { useLoaderData } from "react-router-dom";


const Products = () => {
    const productsData=useLoaderData();
    console.log(productsData)
    return (
        <div>
            {productsData.length}
        </div>
    );
};

export default Products;