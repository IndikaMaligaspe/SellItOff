import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultStyles from '../../configs/styles'

export default function AppTextInput({ backgroundColor, color,  name, placeholder, size, width,style,flex=1,   ... otherProps  }) {

    return (
        <View style={[styles.container]}>
            <MaterialCommunityIcons style={styles.icon}
                name={name}
                size={size}
                color={color}
                backgroundColor={backgroundColor}
            />            
            <TextInput style={[defaultStyles.text, {flex:flex}]}
              placeholder={placeholder}
              { ... otherProps}>
              
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        // width:'50%',
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius:25,
        padding:5,
        marginVertical:10,
        
    },
    icon:{
        marginRight:5,
    }
})