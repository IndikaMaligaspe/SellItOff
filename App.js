import React  from 'react';

import WelcomeScreen from './app/Screens/WelcomeScreen';
import AuthNavigator from './app/Navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './app/Screens/LoginScreen';
import FooterNavigator from './app/Navigators/FooterNavigator';
import navigationtheme from './app/Navigators/navigationtheme';



export default function App() {
  return (
    <NavigationContainer theme={navigationtheme}>
      {/* <AuthNavigator /> */}
      <FooterNavigator />
    </NavigationContainer>
  );
}


