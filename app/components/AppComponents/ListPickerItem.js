import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './AppText'
// import styles from '../../configs/styles'

export default function ListPickerItem({item, onPress}) {
    const backgroundColor = item.icon.backgroundColor
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    <AppText style={styles.text}>{item.label}</AppText>
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
