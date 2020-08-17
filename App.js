import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'

import WelcomeScreen from './app/Screens/WelcomeScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
// import LoginText from './app/components/Button/Button';
import ProductListScreen from './app/Screens/ProductListScreen'

let orientation = false
export default function App() {
  orientation = useDeviceOrientation()
  const dimenssion = useDimensions()
  const handlePress = () => console.log("Text pressed")
  console.log(orientation)
  return (
    <SafeAreaView style={styles.container}>
      {/* <LoginText>LOGIN</LoginText>       */}
      {/* <ViewImageScreen></ViewImageScreen> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      <ProductListScreen></ProductListScreen>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:'100%',
    // height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
