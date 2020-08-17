import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../configs/colors';

function Button(props) {
    return (
    <Text style={styles(props).Text}>{props.children}</Text>
    )
}

const styles = (props) => StyleSheet.create({
    Text:{
        width:'100%',
        height:60,
        textAlign:"center",
        padding:15,
        borderRadius:50,
        backgroundColor:props.color,
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
    }
})

export default Button;