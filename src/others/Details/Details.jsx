
import PropTypes from 'prop-types';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Navbar from '../../components/Header/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';

const Details = () => {
    const { user } = useContext(AuthContext)
    const descriptionData = useLoaderData();
    const { id } = useParams();
    const detailsdata = descriptionData.filter(detailsObject => detailsObject._id == id)
    const [{ description, image_url, name,rating }] = detailsdata;
    const cartObejectforBackend = { description, image_url, name, user }



    const handleCart = (e) => {
        e.preventDefault();


        fetch(`https://cars-data-server-side-alftodujj-freelancerhatem.vercel.app/details/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cartObejectforBackend),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                swal("Good job!", "Product Add to the Cart!", "success");
            });



    }
    return (
        <div>
            <div className='bg-blue-400'>
                <Navbar></Navbar>
            </div>
            {/* details card */}
            <div>
                <div className="relative flex w-full max-w-[34rem] mt-8 mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img src={image_url}
                            alt="ui/ux review check"
                        />
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                        <button
                            className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-6 h-6"
                                >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                {name}
                            </h5>
                            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="-mt-0.5 h-5 w-5 text-blue-400"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                {rating}
                            </p>
                        </div>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                            {description}
                        </p>
                        
                    </div>
                    <div className="p-6 pt-3">
                        <button
                            className="block w-full select-none rounded-lg bg-blue-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-400/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                            onClick={handleCart}
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Details.propTypes = {

};

export default Details;

