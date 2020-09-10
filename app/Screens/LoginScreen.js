import React,  {useState, useContext} from 'react';
import { View, StyleSheet, Image } from 'react-native';

// import {Formik} from 'formik';
import * as Yup  from 'yup'

import Screen from '../components/ScreenComponents/Screen';
// import AppButton from '../components/AppComponents/AppButton';

import AppFormField from '../components/AppComponents/Form/AppFormField';
import AppFormSubmit from '../components/AppComponents/Form/AppFormSubmit'
import AppForm from '../components/AppComponents/Form/AppForm';
import colors from '../configs/colors'
import authApi from '../api/auth'
import AppErrorMessage from '../components/AppComponents/Form/AppErrorMessage';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});
export default function LoginScreen() {
    const auth = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);


    const handleSubmit = async  ({email, password})=>{
          const response = await authApi.login(email, password);
          if (!response.ok){
            setLoginFailed(true);
          }else{
            setLoginFailed(false);
            auth.logIn(response.data)
          }
    }

    return (
        <Screen style={styles.container}>

            <View>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}></Image>
            </View>
            <AppForm
              initialValues={{email: "" , password: ""}}
              onSubmit={(values) => handleSubmit(values)}
              validationSchema={validationSchema}>
                <AppErrorMessage 
                    error="Invalid username / password" 
                    visible={loginFailed} />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    color={colors.secondary}
                    keyboardType="email-address"
                    fieldName='email'
                    name='email'
                    placeholder="Email"
                    placeholderTextColor="black"
                    size={30}
                />
                
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    color={colors.secondary}
                    secureTextEntry={true}
                    fieldName='password'
                    name='lock'
                    placeholder="Password"
                    placeholderTextColor="black"
                    size={30}
                />
                <AppFormSubmit 
                    title="Login"
                    color={colors.secondary}
                    textColor={colors.lightBackground} />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10, 
        padding:15,
    },
    logo:{
        width:70,
        height:70,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20,
    }
})