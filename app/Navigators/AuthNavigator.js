import React from "react";

import {createStackNavigator} from '@react-navigation/stack';
import {} from '@react-navigation/native';

import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

import routes from './routes'

const Stack = createStackNavigator();
export default AuthNavigator =() =>{
    return (
        <Stack.Navigator initialRouteName={routes.WELCOME}>
            <Stack.Screen  
                name={routes.WELCOME} 
                component={WelcomeScreen}  
                options={{
                    title: "Welcome",
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name={routes.LOGIN} 
                component={LoginScreen} 
                options={{
                    title: "Login",
                }}/>
            <Stack.Screen 
                name={routes.REGISTER} 
                component={RegisterScreen} 
                options={{
                    title: "Register",
                }}/>
        </Stack.Navigator>
    )
}