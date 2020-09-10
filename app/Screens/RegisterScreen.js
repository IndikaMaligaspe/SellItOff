import React, { useState } from 'react'
import {StyleSheet} from 'react-native'

import {Formik} from 'formik';
import * as Yup  from 'yup'

import AppForm from '../components/AppComponents/Form/AppForm'
import AppFormField from '../components/AppComponents/Form/AppFormField'
import AppFormSubmit from '../components/AppComponents/Form/AppFormSubmit';
import AppErrorMessage from '../components/AppComponents/Form/AppErrorMessage';
import ActivityIndicator from '../components/AppComponents/ActivityLoader'
import AppFormImagePicker from '../components/AppComponents/Form/AppFormImagePicker'
import colors from '../configs/colors'
import Screen from '../components/ScreenComponents/Screen'
import userApi from '../api/user'
import useAuth from '../auth/useAuth';
import authApi from '../api/auth'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});



function RegisterScreen() {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("")
  const registerApi = useApi(userApi.register)
  const loginApi = useApi(authApi.login)
  const auth = useAuth()
   
  const handleSubmit = async (userInfo) =>{
    const response = await registerApi.request(userInfo)
    if (!response.ok){
      setIsError(true);
      if(response.data) setError(response.data.error)
      else setError("Undefined error occured.")
    }else{
      setIsError(false);
      const {data: authToken} = await loginApi.request(
                  userInfo.email, userInfo.password);
      auth.logIn(authToken);
    }
  }
  
 
  return (
    <React.Fragment>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
          <AppForm
            initialValues={{name:"" , email:"", password: "", imageList: []}}
            onSubmit={(values)=>handleSubmit(values)}
            validationSchema={validationSchema}
          >
             <AppErrorMessage error={error} visible={isError} />
             <AppFormImagePicker 
                  // imageUris={imageList} 
                  imagesLimit={1}
                  fieldName="imageList"
             />
             <AppFormField 
                autoCapitalize="none"
                autoCorrect={false}
                color={colors.secondary}
                fieldName = "name"
                placeholder="Name"
                placeholderTextColor="black"
                name="account"
                size={30}/>
              <AppFormField 
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                color={colors.secondary}
                fieldName = "email"
                placeholder="Email" 
                placeholderTextColor="black"
                name="email"
                size={30}/>
              <AppFormField 
                autoCapitalize="none"
                autoCorrect={false}
                color={colors.secondary}
                fieldName = "password"
                placeholder="Password" 
                placeholderTextColor="black"
                name="lock"
                size={30}/>

            <AppFormSubmit title='Register'           
                color={colors.secondary}
                textColor={colors.lightBackground} 
                padding={5} />
          </AppForm>
      </Screen>
    </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10, 
        padding:15,
    },
})

export default RegisterScreen;