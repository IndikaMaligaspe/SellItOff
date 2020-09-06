import React from "react";

import {createStackNavigator} from '@react-navigation/stack';
// import {} from '@react-navigation/native';

import MessagesScreen from "../Screens/MessagesScreen";
import AccountScreen from '../Screens/AccountScreen'
import MyListingScreen from '../Screens/MyListingsScreen'

import routes from './routes'

const Stack = createStackNavigator();
export default AccountNavigations =() =>{
    return (
        <Stack.Navigator initialRouteName={routes.WELCOME}>
            <Stack.Screen  
                name={routes.ACCOUNT} 
                component={AccountScreen}  
                options={{
                    title: "",
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name={routes.MESSAGES} 
                component={MessagesScreen} 
                options={{
                    title: "",
                    headerShown: false,
                }}/>
            <Stack.Screen 
                name={routes.MYLISTINGS} 
                component={MyListingScreen} 
                options={{
                    title: "",
                    headerShown: false,
                }}/>
        </Stack.Navigator>
    )
}