import React from "react";

import {createStackNavigator} from '@react-navigation/stack';
// import {} from '@react-navigation/native';

import MessagesScreen from "../Screens/MessagesScreen";
import AccountScreen from '../Screens/AccountScreen'
import MyListingScreen from '../Screens/MyListingsScreen'

import routes from './routes'
import ChatScreen from "../Screens/ChatScreen";
import ImageBrowser  from "../Screens/ImageBrowserScreen";
import FooterNavigator from "./FooterNavigator";

const Stack = createStackNavigator();
export default AppNavigator =() =>{
    return (
        <Stack.Navigator initialRouteName={routes.FOOTER_TABS}>
            <Stack.Screen  
                name={routes.FOOTER_TABS} 
                component={FooterNavigator}  
                options={{
                    title: "",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={routes.CHAT_SCREEN}
                component={ChatScreen}
                options={{
                title:"Chats"      
            }} />
            <Stack.Screen             
                name={routes.CHAT_IMAGE_BROWSER}
                component={ImageBrowser}
                options={{
                title:"Images Selection"      
            }} />
        </Stack.Navigator>
    )
}