import React from "react";

import {createStackNavigator} from '@react-navigation/stack';
// import {} from '@react-navigation/native';

import ProductListScreen from "../Screens/ProductListScreen";
import ListingDetailScreen from '../Screens/ListingDetailsScreen';

import routes from './routes'

const Stack = createStackNavigator();
export default ProductListingNavigator =() =>{
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen  
                name={routes.PRODUCT_LIST} 
                component={ProductListScreen}  
                options={{
                    title: "",
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name={routes.PRODUCT_DETAILS} 
                component={ListingDetailScreen} 
                options={{
                    title: "",
                    headerShown: false,
                }}/>
        </Stack.Navigator>
    )
}