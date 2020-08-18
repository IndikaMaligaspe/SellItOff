import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'

import AppText from '../AppComponents/AppText'

import colors from '../../configs/colors'

function Card(props) {
    return (
        <TouchableHighlight 
            underlayColor={colors.lightBackground}
            onPress={props.onPress}>
            <View style={styles.container}>
                <Image style={styles.image}
                    source={props.image} 
                    // resizeMode='contain' 
                />
                <View style={styles.textContainer}>
                    <AppText style={styles.title}>{props.title}</AppText>
                    <AppText style={styles.subtitle}>{props.subtitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.lightBackground,
        width:350,
        borderRadius:20,
        overflow:'hidden',
    },
    image:{
        width:'100%',
        height:200,
    },
    subtitle:{
        color:colors.primary,
        fontSize:20,
        fontWeight:'bold',
    },
    textContainer:{
        marginLeft:20,
        paddingVertical:15,
    },
    title:{
        marginBottom:7,
    }
})
export default Card