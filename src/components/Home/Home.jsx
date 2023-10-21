import { useContext } from "react";
import Productscategory from "../../others/Productscategory/Productscategory";
import Banner from "../Header/Banner/Banner";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";



const Home = () => {
    const{name}=useContext(AuthContext);
    console.log(name)
    return (
        <div>
             <Banner></Banner>
            <Productscategory></Productscategory>
            <AboutUs></AboutUs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;