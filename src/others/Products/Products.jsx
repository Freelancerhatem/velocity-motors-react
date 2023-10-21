import { useLoaderData } from "react-router-dom";


const Products = () => {
    const productsData=useLoaderData();
    
    return (
        <div>
            {productsData.length}
        </div>
    );
};

export default Products;