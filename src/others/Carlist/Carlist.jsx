import { useLoaderData } from "react-router-dom";


const Carlist = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            this is car
        </div>
    );
};

export default Carlist;