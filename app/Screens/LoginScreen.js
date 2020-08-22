import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import {Formik} from 'formik';
import * as Yup  from 'yup'

import Screen from '../components/ScreenComponents/Screen';
// import AppButton from '../components/AppComponents/AppButton';

import colors from '../configs/colors'
import AppFormField from '../components/AppComponents/Form/AppFormField';
import AppFormSubmit from '../components/AppComponents/Form/AppFormSubmit'
import AppForm from '../components/AppComponents/Form/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});
export default function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <View>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}></Image>
            </View>
            <AppForm
              initialValues={{email: "" , password: ""}}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    color={colors.secondary}
                    keyboardType="email-address"
                    fieldNname='email'
                    name='email'
                    placeholder="Email"
                    size={30}
                />
                
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    color={colors.secondary}
                    secureTextEntry={true}
                    fieldNname='password'
                    name='lock'
                    placeholder="Password"
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