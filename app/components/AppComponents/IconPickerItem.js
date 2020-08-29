import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './AppText'

export default function IconPickerItem({item, onPress}) {
    const backgroundColor = item.icon.backgroundColor
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    <MaterialCommunityIcons style={[styles.icon,{backgroundColor}]}
                            name={item.icon.name}
                            size={item.icon.size}
                            color={item.icon.color}
                        />   
                    <AppText style={styles.text}>{item.label}</AppText>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        alignSelf:'center',
        width:100,
    },
    text:{
       paddingVertical:5,
       textAlign:'center',
       fontSize:15,
       width:100,
    },
    icon:{
      width:60,
      height:60,
      borderRadius:35,
      padding:15,
    }
})