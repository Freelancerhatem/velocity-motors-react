import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Addproduct/Firebase/firebase.config";
import Navbar from "../Header/Navbar/Navbar";
import swal from 'sweetalert';

const SignUp = () => {
    const { createUser, user ,setUser} = useContext(AuthContext);
    const[error,setError]=useState('');
    console.log(user);

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        
        const password = form.password.value;
        const passwordChecker = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]{6,}$/;
        setError('')
        if(!passwordChecker.test(password)){
            
            setError('Password must be combine with lower,upper,special character ');
            
        }
        else{

            createUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser,{
                    displayName: name, photoURL: image
                  })
                  .then((newUser) => {
                    console.log(newUser)
                    // setUser(newUser.user)
                    
                  }).catch((error) => {
    
                    console.log(error.message)
                  });
                
                
                swal("Good job!", "Sign up Succesfully!", "success");
                
                
            })
            .catch(error => console.log(error.message));

            

        }
        
        // console.log({ name, image, email, password });

        // console.log(user)





    }
    return (
        <div className="">
            <div className="bg-blue-400">
                <Navbar></Navbar>
            </div>
            <div className=" dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-3 mx-auto md:h-[90vh] ">

                    <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-2 space-y-4 md:space-y-3 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign up
                            </h1>
                            <form onSubmit={handleSignup} className="space-y-4 md:space-y-3">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
                                </div>
                                <div>
                                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                    <input type="text" name="image" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo url of your picture" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your mail" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    <p className="text-red-500 text-xs mt-2 ml-1">{error}</p>
                                <div>

                                </div>
                                </div>
                                <div className="flex items-center justify-between">


                                </div>
                                <button type="submit" className="btn bg-blue-400 text-white  w-full">Sign up</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    have an account?
                                    <Link to='/signin'>
                                        <button className="font-bold  hover:underline dark:text-primary-500 ml-1 text-blue-400">Sign in</button>
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;