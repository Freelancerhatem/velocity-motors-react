
import Navbar from "../Navbar/Navbar";


const Banner = () => {
    return (
        <div className=" relative bg-bg bg-cover bg-center h-[40vh] md:h-screen max-w-full" >
            <div className="absolute w-full">
                <Navbar></Navbar>

            </div>
            <div className=" absolute flex flex-col text-center top-20 md:top-44 left-12">
                <h2 className="md:text-8xl text-xl font-extrabold  text-white">NEED A CAR</h2>
                <h4 className="md:text-4xl text-base font-semibold text-blue-300">FIND THE PERFECT CAR FOR YOU</h4>
            </div>
            <div>
                
            </div>
        </div>

    );
};

export default Banner;




