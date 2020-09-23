import React from 'react'
import { View, StyleSheet } from 'react-native'

import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'

export default function IconComponent({ color, name, size, 
                                        width=size, height=size, 
                                        borderRadious=2,iconType="MaterialCommunity", ...props}) {
    return (
        <View style={[styles(size, borderRadious,width, height, props).container, props.style]}>
            {iconType === "MaterialCommunity" ? 
            (<MaterialCommunityIcons 
                name={name}
                size={size * 0.5}
                color={color}
                onPress={props.onSelect}
            />)
            :(
                <Ionicons
                    name={name}
                    size={size * 0.5}
                    color={color}
                    onPress={props.onSelect}
                />  
            )}
                                                   
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
        marginTop:10,
    }
})