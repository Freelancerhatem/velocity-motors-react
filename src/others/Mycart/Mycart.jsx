
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../components/Header/Navbar/Navbar';
import Mycartdata from '../Mycartdata/Mycartdata';
import { useContext, useState } from 'react';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Mycart = () => {
    const { user } = useContext(AuthContext);
    const uniqueUser = user?.email;
    const data = useLoaderData();
    // console.log(uniqueUser)
    
    const usersCartData = data?.filter(userCartData => userCartData.user.email == uniqueUser);
    const[cartRemainig,setRemaining] = useState(usersCartData);
    // console.log(data[0].user.email)
    // console.log(uniqueUser)
    
    
    const handleDelete = (id) => {
        

        fetch(`https://cars-data-server-side-alftodujj-freelancerhatem.vercel.app/details/${id}`,{
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data,'deleted succes');
                const cartafterRemainig =cartRemainig?.filter(carsdata=>carsdata._id != id);
                setRemaining(cartafterRemainig) 
                if(data.deletedCount > 0){
                    swal("Good job!", "data deleted succesfully!", "success");
                }

            });

    }



    return (
        <div>
            <div className='bg-blue-400'>
                <Navbar></Navbar>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 md:px-32 mx-auto'>
                {
                    cartRemainig?.map((cartdata, index) => <Mycartdata key={index} cartdata={cartdata} handleDelete={handleDelete}></Mycartdata>)
                }
            </div>
        </div>
    );
};

Mycart.propTypes = {

};

export default Mycart;