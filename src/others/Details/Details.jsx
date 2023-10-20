
import PropTypes from 'prop-types';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const descriptionData = useLoaderData();
    const {id} = useParams();
    const detailsdata = descriptionData.filter(detailsObject=>detailsObject._id==id)
    const [{description,image_url}] =detailsdata; 
    // console.log(id)
    console.log(description)

    const handleCart=(e)=>{
        e.preventDefault();
        
    }
    return (
        <div className='px-32 '>
            <div className='w-7/12 mx-auto h-[60vh]  bg-red-300 mt-10 rounded-lg '>
                <img className='h-3/6 mx-auto' src={image_url} alt="" />
                <p className='text-center'>
                {description}
                </p>
            <Link  to=''>
            <button className='btn btn-outline mx-auto' onClick={handleCart}>Add to cart</button>
            </Link>
            </div>
        </div>
    );
};

Details.propTypes = {
    
};

export default Details;