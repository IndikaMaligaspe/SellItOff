import React,{useState}  from 'react';

import {AppLoading} from 'expo';
import AuthNavigator from './app/Navigators/AuthNavigator';
import AuthContext from './app/auth/context';
import authStore from './app/auth/store';
import FooterNavigator from './app/Navigators/FooterNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationtheme from './app/Navigators/navigationtheme';
import { navigationRef } from './app/Navigators/rootNavigation';
import ChatNavigation from './app/Navigators/ChatNavigation';
import AppNavigator from './app/Navigators/AppNavigator';
import CameraComponent from './app/components/AppComponents/NativeComponents/CameraComponent';



export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () =>{
    const user = await authStore.getUser();
    if(!user) return;
    setUser(user);
  } 


  if(!isReady)
    return <AppLoading startAsync={restoreUser} onFinish={()=>setIsReady(true)} />
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer ref={navigationRef} theme={navigationtheme}>
        {/* {user? <AppNavigator /> : <AuthNavigator/>} */}
        {/* <ChatScreen></ChatScreen> */}
        {/* <AppImageBrowser></AppImageBrowser> */}
        {/* <ChatNavigation></ChatNavigation> */}
        <CameraComponent/>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


