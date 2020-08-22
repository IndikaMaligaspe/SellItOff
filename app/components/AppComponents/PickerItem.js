import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import AppText from '../AppComponents/AppText'
// import styles from '../../configs/styles'

export default function PickerItem({label, onPress}) {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <AppText style={styles.text}>{label}</AppText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
       paddingVertical:5,
       paddingHorizontal:15 
    }
})
