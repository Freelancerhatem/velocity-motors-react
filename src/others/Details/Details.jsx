
import PropTypes from 'prop-types';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Navbar from '../../components/Header/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';

const Details = () => {
    const{user}=useContext(AuthContext)
    const descriptionData = useLoaderData();
    const { id } = useParams();
    const detailsdata = descriptionData.filter(detailsObject => detailsObject._id == id)
    const [{ description, image_url,name }] = detailsdata;
    const cartObejectforBackend={description,image_url,name,user}
    
    

    const handleCart = (e) => {
        e.preventDefault();
        
        
        fetch(`http://localhost:5000/details/${id}`, {
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
            <div className='bg-slate-500'>
                <Navbar></Navbar>
            </div>
            <div className='px-32 '>
                <div className='w-7/12 mx-auto h-[60vh]  bg-red-300 mt-10 rounded-lg '>
                    <img className='h-3/6 mx-auto' src={image_url} alt="" />
                    <p className='text-center'>
                        {description}
                    </p>
                    <Link to=''>
                        <button className='btn btn-outline mx-auto' onClick={handleCart}>Add to cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Details.propTypes = {

};

export default Details;