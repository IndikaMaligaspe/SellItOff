import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import ChatScreen from '../Screens/ChatScreen';
import ImageBrowser from '../Screens/ImageBrowserScreen';

import routes from './routes';

const Stack = createStackNavigator();
export default function ChatNavigation() {
    return (
        <Stack.Navigator initialRouteName={routes.CHAT_SCREEN}>
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
                title:"Image Selection"      
            }} />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
