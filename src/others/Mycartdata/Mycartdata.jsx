
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';

const Mycartdata = ({cartdata,handleDelete}) => {
    const{name,image_url,_id} = cartdata;
    return (
        <div className='mx-auto mt-8'>
            <div className='h-64 w-64 rounded-lg relative  bg-slate-400'>
                    <button onClick={()=>handleDelete(_id)} className=" absolute right-2 bg-white rounded-full top-1"><MdDeleteForever className='text-3xl'></MdDeleteForever></button>
                <img className='h-52 p-8 rounded-lg' src={image_url} alt="" />
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