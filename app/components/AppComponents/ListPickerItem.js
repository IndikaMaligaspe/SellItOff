import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './AppText'
// import styles from '../../configs/styles'

export default function ListPickerItem({item, onPress}) {
    const backgroundColor = item.backgroundColor
    // console.log(`ITEM - ${item}`);
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    {item.label && 
                        <AppText style={styles.text}>{item.label}</AppText>
                    }
                    {item.name && 
                        <AppText style={styles.text}>{item.name}</AppText>
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'flex-start',
    },
    text:{
       paddingVertical:5,
       fontSize:15,
    }
})
