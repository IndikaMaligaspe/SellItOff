import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import AppText from '../AppComponents/AppText'

export default function componentName(props) {
  return (
   <TouchableHighlight onPress={()=>console.log()}>   
        <View style={styles.container}>
            <Image 
                source={props.image}
                style={styles.image}
            />
            <View style={styles.imageTextContainer}>
                <AppText style={styles.nameText}>{props.title}</AppText>
                <AppText style={styles.listingsText}>{props.subtitle}</AppText>
            </View>
        </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:200,
        marginTop:30,
        marginLeft:30,
        flexDirection:'row',
        alignItems:'flex-start',
    },
    image:{
        width:70,
        height:70,
        borderRadius:35
    },
    imageTextContainer:{
        marginTop:10,
    },
    nameText:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:10,

    },
    listingsText:{
        fontSize:20,
        fontWeight:'100',
        color:'grey',
        marginLeft:10,
    },
})