
import { Link } from 'react-router-dom';
import error from '/src/assets/images/error.jpg'


const Errorpage = () => {
    return (
        <div className="w-screen   items-center ">
            <img className='w-[50vh] h-[50vh]  mx-auto mt-20 ' src={error} alt="" />
            <div className='w-screen  h-32 flex flex-col justify-center'>
                <h1 className='text-center text-5xl font-bold'>NO DATA FOUND</h1>
                <Link className='mx-auto' to={'/'}><button className='btn btn-outline mt-3'>Go Home</button></Link>
            </div>
        </div>
    );
};

export default Errorpage;