import React from 'react'
import { StyleSheet, View } from 'react-native'

import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../configs/colors'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

export default function NewListingButton({onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons 
                    name="plus-circle" 
                    size={40} 
                    color={colors.lightBackground}/>            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:colors.secondary,
        borderWidth:10,
        borderColor:colors.lightBackground,
        borderRadius:40,
        bottom:35,
        color:colors.lightBackground,
        height:80,
        justifyContent:"center",
        width:80,
    }
})

// export default NewListingButton;
