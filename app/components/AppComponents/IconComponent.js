import React from 'react'
import { View, StyleSheet } from 'react-native'

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function IconComponent(props) {
    return (
        <View style={styles(props).container}>
            <MaterialCommunityIcons 
                name={props.name}
                size={props.size * 0.5}
                color={props.color}
            />            
        </View>
    )
}

const styles = (props) => StyleSheet.create({
    container:{
        backgroundColor:props.backgroundColor ,
        width:props.size,
        height:props.size,
        borderRadius:props.size / 2 ,
        justifyContent:"center",
        alignItems:"center",
    }
})