import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//import colors from '../../configs/colors';

function AppButton(props) {
    return (
        <TouchableOpacity style={styles(props).button} onPress={props.onPress}>
            <Text style={styles(props).text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = (props) => StyleSheet.create({
    button:{
        width:'100%',
        height:60,
        textAlign:"center",
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderRadius:50,
        backgroundColor:props.color,
    },
    text:{
        fontSize:20,
        color:props.textColor,
        fontWeight:'bold',
        textTransform:'uppercase',
    }
})

export default AppButton;