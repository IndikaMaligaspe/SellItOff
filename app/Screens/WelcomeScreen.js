import React from 'react'
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native'

import colors from '../configs/colors'
import Button from '../components/Button/Button'

export default function WelcomeScreen() {
    return (
        <ImageBackground style={styles.imgBackground } 
                 resizeMode='cover'
                //  blurRadius='5'
                 source={require('../assets/background.jpg')}>
            <View style={styles.logoView}>
               <Image resizeMode="center" style={styles.logo} source={require('../assets/logo-red.png')}></Image>
               <Text style={styles.logoText}>Sell what you Don't Need</Text>   
            </View>  
            <View style={styles.signIn}>
                <Button color={colors.secondary}>LOGIN</Button>
            </View>
            <View style={styles.signUp}>
                <Button color={colors.primary}>REGISTER</Button>
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