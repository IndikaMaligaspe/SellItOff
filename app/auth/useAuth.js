import {useContext} from 'react'
import AuthContext from './context'
import jwtDeCoder from 'jwt-decode'
import authStore from './store'

export default useAuth = () =>{
    const {user, setUser} = useContext(AuthContext);
    
    const logIn = (authToken) => {
        const loggedInUser = jwtDeCoder(authToken);
        setUser(loggedInUser); 
        authStore.storeToken(authToken);
    };

    const logOut = () => {
        setUser(null);
        authStore.removeToken();
    };

    // const registerUser = () =>{
        
    // }

    return {user, logIn, logOut};
};