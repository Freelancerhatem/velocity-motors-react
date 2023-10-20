
import Navbar from "../Navbar/Navbar";


const Banner = () => {
    return (
        <div className=" relative bg-bg bg-cover bg-center h-screen max-w-full" >
            <div className="absolute w-full">
                <Navbar></Navbar>

            </div>
            <div className=" absolute flex flex-col text-center top-44 left-12">
                <h2 className="md:text-8xl font-extrabold  text-white">NEED A CAR</h2>
                <h4 className="text-4xl font-semibold text-blue-300">FIND THE PERFECT CAR FOR YOU</h4>
            </div>
            <div>
                
            </div>
        </div>

    );
};

export default Banner;




