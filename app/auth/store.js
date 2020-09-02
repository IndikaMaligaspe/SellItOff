import * as SecurreStore from 'expo-secure-store';
import jwtDeCoder from 'jwt-decode';


const authToken = 'auth'
const storeToken = async (token) =>{
   try {
        await SecurreStore.setItemAsync(authToken, token);
   } catch (error) {
       console.log('Error storing auth token !', error);
   }
}

const getToken = async () =>{
    try {
        return await SecurreStore.getItemAsync(authToken);
    } catch (error) {
        console.log('Error retrieving auth token !', error);        
    }
}

const removeToken = async () =>{
    try {
       await SecurreStore.deleteItemAsync(authToken); 
    } catch (error) {
        console.log('Error removing token !', error);
    }
}

const getUser = async() =>{
    const token = await getToken();
    return (token) ? jwtDeCoder(token) : null
}
export default {
    getToken,
    getUser,
    removeToken,
    storeToken,
}