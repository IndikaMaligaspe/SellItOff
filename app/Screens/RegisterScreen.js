import React from 'react'
import {StyleSheet} from 'react-native'

import {Formik} from 'formik';
import * as Yup  from 'yup'

import Screen from '../components/ScreenComponents/Screen'
import AppForm from '../components/AppComponents/Form/AppForm'
import AppFormField from '../components/AppComponents/Form/AppFormField'

import colors from '../configs/colors'
import AppFormSubmit from '../components/AppComponents/Form/AppFormSubmit';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
    return (
      <Screen style={styles.container}>
          <AppForm
            initialValues={{name:"" , email:"", password: ""}}
            onSubmit={(values)=>console.log(values)}
            validationSchema={validationSchema}
          >
             <AppFormField 
                autoCapitalize="none"
                autoCorrect={false}
                color={colors.secondary}
                fieldName = "name"
                placeholder="Name" 
                name="account"
                size={30}/>
              <AppFormField 
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                color={colors.secondary}
                fieldName = "email"
                placeholder="Email" 
                name="email"
                size={30}/>
              <AppFormField 
                autoCapitalize="none"
                autoCorrect={false}
                color={colors.secondary}
                fieldName = "password"
                placeholder="Password" 
                name="lock"
                size={30}/>

            <AppFormSubmit title='Register'           
                color={colors.secondary}
                textColor={colors.lightBackground} 
                padding={5} />
          </AppForm>
      </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10, 
        padding:15,
    },
})