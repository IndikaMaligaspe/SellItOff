import React from 'react'
import { View, StyleSheet } from 'react-native'

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function IconComponent({ color, name, size, 
                                        width=size, height=size, 
                                        borderRadious=2, ...props}) {
    return (
        <View style={[styles(size, borderRadious,width, height, props).container, props.style]}>
            <MaterialCommunityIcons 
                name={name}
                size={size * 0.5}
                color={color}
                onPress={props.imagePicker}
            />            
        </View>
    )
}

const styles = (size, borderRadious,width, height, props) => StyleSheet.create({
    container:{
        backgroundColor:props.backgroundColor ,
        width:width,
        height:height,
        borderRadius:size / borderRadious ,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
    }
})