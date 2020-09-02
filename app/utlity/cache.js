import {AsyncStorage} from 'react-native'
import moment from 'moment'

const prefix = 'cache';
const exipiryInMinutes = 5;

const store = async (key , value) => {
    try {
        const item = {
            value: value,
            timestamp: Date.now(),
        }   
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
}

const isExpired = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(items.timestamp);
    return (now.diff(storedTime, 'minutes') > exipiryInMinutes);
}
const get = async (key) => {
   try {
       const cachedItem = await AsyncStorage.getItem(prefix + key);
       const item = JSON.parse(cachedItem); 
        if (!item) return null;

        //    breaking CQS here
        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }
        return item.value;
    } catch (error) {
        console.log(error);      
    } 
}

export default{
    get,
    store,
}