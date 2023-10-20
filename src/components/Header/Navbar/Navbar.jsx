import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/logoicon.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  const{user,signOutuser}=useContext(AuthContext);
  // console.log(user)
    return (
        <div>
             <div>

<nav className="bg-blue-400 md:bg-transparent">
  <div className=" flex  flex-wrap items-center justify-between mx-auto py-1 md:py-0 px-2  md:px-2 lg:px-12">

    <div className="dropdown md:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <GrMenu></GrMenu>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/signin'>Sign In</Link></li>
        <li><Link to='/signup'>Registration</Link></li>
        <li><Link to='/mycart'>My cart</Link></li>
      </ul>
    </div>

    <div className="hidden md:block">
      <span className="flex items-center ">
        <Link to='/'>
          <img src={logo} className="h-4 md:h-20 mr-1 mt-3 lg:mr-3" alt=" Logo" />
        </Link>
        <span className="self-center text-base lg:text-2xl font-semibold whitespace-nowrap text-white">Velocity Motors</span>
      </span>
    </div>
    
    <div className="order-2">
      {
        user ?
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1"><img className="rounded-full w-4 lg:w-12" src={ user?.photoURL? user.photoURL : '' } alt="" /> <h1 className="font-medium text-xs lg:text-base text-white">{user?.displayName ?user.displayName :''}</h1></div>
            <button onClick={signOutuser} className="btn-xs rounded-md lg:btn bg-white text-blue-400 hover:bg-blue-400 hover:text-white">Log Out</button>
          </div>
          : <Link to='/signin'>
            <button className="btn-xs rounded-md md:btn bg-white text-orange-400 hover:bg-blue-400 hover:text-white">Sign in</button>
          </Link>
      }
    </div>
    <div className="items-center hidden justify-between  w-full md:flex  md:w-auto " id="navbar-cta">
      <ul className="flex    font-medium  lg:p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-2 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <NavLink to='/' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
        }>
          <li>

            <button className="block py-2 pl-1 lg:pl-3 lg:pr-4 text-white  rounded" aria-current="page">Home</button>
          </li>
        </NavLink>

       
        <NavLink to='/signup' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
        }>
          <li>

            <button className="block py-2 pl-1 lg:pl-3 lg:pr-4 text-white  rounded" aria-current="page">Registration</button>
          </li>
        </NavLink>
        <NavLink to='/addproduct' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
        }>
          <li>

            <button className={'block py-2 pl-1 lg:pl-3 lg:pr-4 text-white  rounded'} aria-current="page">Add Product</button>
          </li>
        </NavLink>
        
        <NavLink to='/mycart' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
        }>
          <li>

            <button className={'block py-2 pl-1 lg:pl-3 lg:pr-4 text-white  rounded'} aria-current="page">My Cart</button>
          </li>
        </NavLink>
        
      </ul>
    </div>
  </div>
</nav>

</div>
        </div>
    );
};

export default Navbar;