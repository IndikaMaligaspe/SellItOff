import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {MaterialCommunityIcons} from '@expo/vector-icons'

import AccountNavigation from './AccountNavigation'
import ListingEditScreen from '../Screens/ListingEditScreen'
import ProductListingNavigator from './ProductListingNavigator';

import colors from '../configs/colors'

import NewListingButton from './NewListingButton';
import routes from './routes'

const bottomTab = createBottomTabNavigator()
export default FooterNavigator= () =>{
    
    return (
        <bottomTab.Navigator
             tabBarOptions={{
                 activeBackgroundColor:colors.lightBackground,
                 activeTintColor: colors.secondary,
                 inactiveBackgroundColor:colors.dullbackgraound,
                 inactiveTintColor:colors.mediumGrey,
                 
             }}>
            <bottomTab.Screen
                name={routes.FEED} 
                component={ProductListingNavigator}  
                options={{
                    title: "Feed",
                    headerShown: false,
                    tabBarIcon:({size, color})=><MaterialCommunityIcons name="home" size={size} color={color}/>,
                }} 
            />
            <bottomTab.Screen
                name={routes.LIST_EDIT} 
                component={ListingEditScreen}  
                options={({navigation}) => ({
                    tabBarButton:()=>( 
                        <NewListingButton 
                            onPress={() =>navigation.navigate(routes.LIST_EDIT)}
                            />)
                })} 
                
            />
            <bottomTab.Screen
                name={routes.ACCOUNT}
                component={AccountNavigation}  
                options={{
                    title: "Acount",
                    headerShown: false,
                    tabBarIcon:({size, color})=><MaterialCommunityIcons name="account" size={size} color={color}/>,
                }} 
            />

            
        </bottomTab.Navigator>    
    )
}