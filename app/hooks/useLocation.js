import * as Location from 'expo-location';
import {useState , useEffect} from 'react'

export default useLocation = () => {
    const [location,setLocation] = useState(null)

    const requestPermission = async () => {
      try {
        const {granted}  = await Location.requestPermissionsAsync();
        if (!granted)
          return
        const {coords:{latitude,longitude}}= await Location.getCurrentPositionAsync({});
        setLocation({latitude,longitude})
      } catch (error) {
        console.log("Error ", error)  
      }
    }; 
    
    useEffect(() => {
      requestPermission();
    }, []);
    return location
}