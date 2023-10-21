import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import swal from 'sweetalert';


const SignIn = () => {
    const { signInuser,googleLogin,setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation();
    

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        
        
        signInuser(email, password)
            .then(() => {
                
                // const user = res.user;
                // console.log(user);
                swal("Good job!", "Login Succesfully!", "success");
                navigate(location?.state? location.state :'/')

            })
            .catch(() => {
                
                
                
                navigate('/signin')
                swal("Warning!", "Login Failed!", "error");
                setLoading(false)
                
            })
    };
    const handleGoogle=e=>{
        e.preventDefault();
        googleLogin()
        .then(()=>{
            swal("Good job!", "Login Succesfully!", "success");
                navigate(location?.state? location.state :'/')
        })
        .catch(()=>{
            navigate('/signin')
                swal("Warning!", "Login Failed!", "error");
                setLoading(false)
        })
    }
    
    return (
        <div>
            <div className="bg-blue-300">
                <Navbar></Navbar>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSignin}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                
                                
                                {/* <div className="flex items-center justify-between">


                                </div> */}
                                <button type="submit" className="btn bg-blue-400 text-white  hover:bg-blue-300 w-full">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?
                                    <Link to='/signup'>
                                        <button href="#" className="font-medium text-blue-500 ml-1  hover:underline dark:text-primary-500">Sign up</button>
                                    </Link>
                                </p>
                                <p className="w-full text-center border-b-2">or</p>
                                <button onClick={handleGoogle} className="btn w-full btn-outline">login with google <FcGoogle></FcGoogle></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;