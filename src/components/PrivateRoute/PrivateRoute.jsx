
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);
    const location =useLocation();
    // console.log(location.pathname)
    if(loading){
        return 'loading'
    }
    else if(user){
        return children
    }
    else{
        return (
            <Navigate state={location.pathname} to='/signin'>
                
            </Navigate >
        );
    }
};

PrivateRoute.propTypes = {
    children:PropTypes.any
};

export default PrivateRoute;