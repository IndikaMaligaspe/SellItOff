import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ListItemSeperator({style}) {
  return (
    <View style={[styles.seperator, style]}>
     </View>
  );
}
const styles = StyleSheet.create({
    seperator:{
        width:'100%',
        height:10,
    },
})
