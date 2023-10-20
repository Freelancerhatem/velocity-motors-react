
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';

const Mycartdata = ({cartdata,handleDelete}) => {
    const{name,image_url,_id} = cartdata;
    return (
        <div className='px-32 mt-8'>
            <div className='h-64 w-64 rounded-lg relative  bg-slate-400'>
                    <button onClick={()=>handleDelete(_id)} className=" absolute right-2 bg-white rounded-full top-2"><MdDeleteForever className='text-3xl'></MdDeleteForever></button>
                <img className='h-52' src={image_url} alt="" />
                <p className='text-xl text-center font-semibold' >{name}</p>
            </div>
        </div>
    );
};

Mycartdata.propTypes = {
    cartdata:PropTypes.object,
    handleDelete:PropTypes.func
};

export default Mycartdata;