import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import AppText from '../AppComponents/AppText'
import colors from '../../configs/colors';
import IconComponent from '../AppComponents/IconComponent';

export default function componentName(props) {
  return (
   <TouchableHighlight underlayColor={colors.lightBackground} onPress={props.onPress}>   
        <View style={styles.container}>
            {props.image && <Image 
                source={props.image}
                style={styles.image}
            />}
            {props.ImageComponent}
            <View style={styles.imageTextContainer}>
                <AppText style={styles.nameText}>{props.title}</AppText>
                {props.subtitle && <AppText style={styles.listingsText}>{props.subtitle}</AppText>}
            </View>
        </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:15,
        flexDirection:'row',
        alignItems:'flex-start',
    },
    image:{
        width:70,
        height:70,
        borderRadius:35
    },
    imageTextContainer:{
        justifyContent:'center',
        alignSelf:'center',
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