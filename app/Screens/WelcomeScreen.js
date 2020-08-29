import React from 'react'
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native'

import colors from '../configs/colors'
import AppButton from '../components/AppComponents/AppButton'

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground style={styles.imgBackground } 
                 resizeMode='cover'
                //  blurRadius='5'
                 source={require('../assets/background.jpg')}>
            <View style={styles.logoView}>
               <Image 
               resizeMode="center" 
               style={styles.logo} 
               source={require('../assets/logo-red.png')} />
               <Text style={styles.logoText}>Sell what you Don't Need</Text>   
            </View>  
            <View style={styles.signIn}>
                <AppButton 
                    color={colors.secondary}
                    textColor={colors.lightBackground}
                    title="login"
                    onPress={()=> navigation.navigate("Login")}
                 />
            </View>
            <View style={styles.signUp}>
                <AppButton 
                    color={colors.primary} 
                    textColor={colors.lightBackground}
                    title="register"
                    onPress={()=> navigation.navigate("Register")}/>
                
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBackground: {
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:"flex-end",
    },
    logoView:{
        alignItems: 'center',
        position: 'absolute',
        width:'100%',
        height:'20%',
        top:70,       
    },
    logo:{
        width:100,
        height:100,
    },
    logoText:{
        fontSize:20,
        fontWeight:'bold',
    },
    signIn: {
        width:'100%',
        height:70,
        paddingLeft:10,
        paddingRight:10,
        // backgroundColor: colors.secondary,
    },
    signUp: {
        width:'100%',
        height:70,
        paddingLeft:10,
        paddingRight:10,
        marginTop:10,
        marginBottom:10,
        // backgroundColor: colors.primary,
    }
})