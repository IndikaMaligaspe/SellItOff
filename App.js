import React,{useState}  from 'react';

import {AppLoading} from 'expo';
import AuthNavigator from './app/Navigators/AuthNavigator';
import AuthContext from './app/auth/context';
import authStore from './app/auth/store';
import FooterNavigator from './app/Navigators/FooterNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationtheme from './app/Navigators/navigationtheme';



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
      <NavigationContainer theme={navigationtheme}>
        {user? <FooterNavigator /> : <AuthNavigator/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


