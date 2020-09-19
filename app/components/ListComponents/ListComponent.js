import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight, ViewBase } from 'react-native';

import AppText from '../AppComponents/AppText'
import colors from '../../configs/colors';
import IconComponent from '../AppComponents/IconComponent';
import { NONE } from 'apisauce';

export default function ListComponent(props) {
  return (
   <TouchableHighlight underlayColor={colors.lightBackground} onPress={props.onPress}>  
        <View style={styles.container}>
            {(!props.image || props.image.uri===null) ?  
               (props.ImageComponent) 
               : 
               (<Image 
                    source={props.image}
                    style={styles.image}
            />)
            }
            <View style={styles.imageTextContainer}>
                <AppText style={styles.nameText}>{props.title}</AppText>
                {props.subtitle && <AppText style={styles.listingsText}>{props.subtitle}</AppText>}
            </View>
            {props.showCheveron && <View style={styles.chevron}>
                <IconComponent 
                  name="chevron-right"
                  size={40}
                  color={colors.darkBackground} 
                />
            </View>}
        </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:15,
        flexDirection:'row',
    },
    chevron:{
        marginRight:5,
        alignSelf:'center'
    },
    image:{
        width:70,
        height:70,
        borderRadius:35
    },
    imageTextContainer:{
        justifyContent:'center',
        alignSelf:'center',
        width:'70%'
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