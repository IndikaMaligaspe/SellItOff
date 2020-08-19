import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'

import WelcomeScreen from './app/Screens/WelcomeScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
import ProductListScreen from './app/Screens/ProductListScreen'
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen'
import MessagesScreen from './app/Screens/MessagesScreen'
import AccountScreen from './app/Screens/AccountScreen'
import colors from './app/configs/colors';

let orientation = false
export default function App() {
  orientation = useDeviceOrientation()
  const dimenssion = useDimensions()
  const handlePress = () => console.log("Text pressed")
  console.log(orientation)
  return (
    // <SafeAreaView style={styles.container}>
      
      
      // <ViewImageScreen />
      // <WelcomeScreen />
      // <ProductListScreen />
      // <ListingDetailsScreen />
      // <MessagesScreen />
      <AccountScreen />
    // </SafeAreaView>
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
