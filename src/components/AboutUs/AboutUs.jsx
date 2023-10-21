

const AboutUs = () => {
    return (
        <div >

            <div className="hero min-h-screen  bg-base-200">
                <div className="flex flex-col md:flex-row md:px-14 px-0  md:justify-center md:items-center">
                   <div className="md:w-1/2 px-3 md:px-0 w-full">
                        <h1 className="md:text-5xl text-base mt-1 md:mt-0 font-bold w-full text-center md:text-start mx-auto"><span className="border-l-4 pl-4 border-blue-400">About</span> <span className="text-blue-400">us</span></h1>
                        <p className="md:py-6   py-1 text-xs md:text-base md:px-0 w-full">At <span className="text-base text-blue-500 font-bold ">Velocity Motors</span>, we are not just in the business of selling cars; we are in the business of making dreams come true. Our journey began with a passion for automobiles and a commitment to delivering unparalleled service to our valued customers. As a family-owned and operated car dealership, we take pride in providing a personal touch to every interaction and transaction.</p>
                        <button className="md:btn btn-xs rounded-lg  bg-blue-400 lg:bg-blue-400 text-white  lg:text-white ">Know More</button>
                    </div>
                    <img src="https://i.ibb.co/vkqFVgP/bmw.png" className="md:w-1/2 w-full rounded-lg " />
                    
                </div>
            </div>


        </div>
    );
};

export default AboutUs;