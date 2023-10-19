
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCategory = ({categorydata}) => {
    const {name,img} = categorydata
    return (
        <div>
            <Link to='carlist'>
            <div className='bg-slate-300 rounded-md  h-60 relative flex justify-center'>
                <img className='h-full absolute ' src={img} alt="" />
                <div className='absolute left-0 bg-gray-400 rounded-br-md px-4'>
                    <h1 className='text-lg font-bold'>{name}</h1>
                </div>
            </div>
            </Link>
        </div>
    );
};

ProductCategory.propTypes = {
    categorydata:PropTypes.object
};

export default ProductCategory;


