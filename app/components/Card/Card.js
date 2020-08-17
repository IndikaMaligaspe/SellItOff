import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../../configs/colors'

function Card(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={props.image} 
                // resizeMode='contain' 
            />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.lightBackground,
        marginTop:50,
        borderRadius:20,
        width:350,
        height:350,
    },
    image:{
        width:'100%',
        height:'70%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:0,
    },
    subtitle:{
        color:colors.primary,
        fontSize:20,
        fontWeight:'bold',
        marginLeft:20,
        marginTop:5,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:20,
        marginTop:20,
    }
})
export default Card