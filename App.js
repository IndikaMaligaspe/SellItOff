import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'

import WelcomeScreen from './app/Screens/WelcomeScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
import ProductListScreen from './app/Screens/ProductListScreen'
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen'
import MessagesScreen from './app/Screens/MessagesScreen'
import AccountScreen from './app/Screens/AccountScreen'
import Screen from './app/components/ScreenComponents/Screen'

import colors from './app/configs/colors';

import { useState } from 'react';
import AppPicker from './app/components/AppComponents/AppPicker';
import AppTextInput from './app/components/AppComponents/AppTextInput'
import LoginScreen from './app/Screens/LoginScreen';


let orientation = false

// const categories = [
//   {
//     label:'Furniture', 
//     value: 1,
//   },
//   {
//     label:'Clothing', 
//     value: 2,
//   },
//   {
//     label:'Shoes', 
//     value: 3,
//   },
// ]
export default function App() {
  const [textInput, setTextInput] = useState('');
  // orientation = useDeviceOrientation();
  // const dimenssion = useDimensions();
  // const handlePress = () => console.log("Text pressed");
  // console.log(orientation);
 

  return (
    // <SafeAreaView style={styles.container}>
      
      
      // <ViewImageScreen />
      // <WelcomeScreen />
      // <ProductListScreen />
      // <ListingDetailsScreen />
      // <MessagesScreen />
      // <AccountScreen />
    // </SafeAreaView>
    // <Screen>
    //    <AppPicker 
    //      icon='apps'
    //      size={30}
    //      color= {colors.mediumGrey}
    //      placeholder="Category"
    //      categories={categories}/>
    //      <AppTextInput name='email' size={30} placeholder='Email'></AppTextInput>
    // </Screen>

    <LoginScreen />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
