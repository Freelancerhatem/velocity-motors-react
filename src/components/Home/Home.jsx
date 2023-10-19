import { useContext } from "react";
import Productscategory from "../../others/Productscategory/Productscategory";
import Banner from "../Header/Banner/Banner";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Home = () => {
    const{name}=useContext(AuthContext);
    console.log(name)
    return (
        <div>
             <Banner></Banner>
            <Productscategory></Productscategory>
        </div>
    );
};

export default Home;