import React  from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import AccountNavigation from './AccountNavigation';
import ListingEditScreen from '../Screens/ListingEditScreen';
import ProductListingNavigator from './ProductListingNavigator';
import navigation from '../Navigators/rootNavigation';

import colors from '../configs/colors';
import routes from './routes';
import useNotifications from '../hooks/useNotifications';


const bottomTab = createBottomTabNavigator()
export default FooterNavigator= () =>{
  useNotifications((notification) => {
      data = notification.data;
      if(data) {
         if(data.screen === 'chat')
         navigation.navigate(routes.ACCOUNT, {screen: routes.MESSAGES})
      }else{
        navigation.navigate(routes.ACCOUNT)}
      } 
  );

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
                options={{
                    title: "Add",
                    headerShown: false,
                    tabBarIcon:({size, color})=><MaterialCommunityIcons name="plus" size={size} color={color}/>,
                }}  
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