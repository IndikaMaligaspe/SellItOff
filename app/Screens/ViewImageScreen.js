import React from 'react'
import { View, Image, StyleSheet, SafeAreaView } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../configs/colors'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}> 
                <View style={styles.closeIcon}>
                    <MaterialCommunityIcons 
                        name='close' 
                        size={30} 
                        color='#fff' />
                </View>
                <View style={styles.deleteIcon}>
                    <MaterialCommunityIcons 
                        name='trash-can-outline' 
                        size={30} 
                        color='#fff' />
                </View>
                <Image 
                style={styles.image} resizeMode='contain'  
                    source={require('../assets/chair.jpg')}></Image>
        </View>
        
    )
}

const styles =StyleSheet.create({

    closeIcon:{
        // backgroundColor: colors.primary,
        width:50,
        height:50,
        position:"absolute",
        top:20,
        left:30,
    },
    container: {
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor: colors.darkBackground,
    },
    deleteIcon:{
        // backgroundColor: colors.secondary,
        width:50,
        height:50,
        position:"absolute",
        top:20,
        right:30,
    },
    image:{
        width:'100%',
        height:'100%',
    },
})