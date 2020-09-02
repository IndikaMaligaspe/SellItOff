import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Image} from 'react-native-expo-image-cache'

import AppText from '../components/AppComponents/AppText'
import ListComponent from '../components/ListComponents/ListComponent'
// import Card from '../components/Card/Card'

import colors from '../configs/colors'

export default function ListingDetailsScreen({route}) {
    const item =  route.params.item
    return (
        <View style={styles.container}>
            <View style={styles.productContainer}>
                <Image 
                    preview={{uri:item.images[0].thumbnailURL}}
                    tint="light"
                    style={styles.image}
                    uri = {item.images[0].url}
                />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{item.title}</AppText>
                    <AppText style={styles.subtitle}>{item.price}</AppText>
                </View>
            </View>
            <ListComponent 
            image={require('../assets/profileImage.png')} 
            title="Indika Maligaspe"
            subtitle="5 listings" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        width:'100%',
        backgroundColor:  '#f8f4f4',
    },
    detailsContainer:{
        padding:20,
    },
    image:{
        width:'100%',
        height:'70%',
    },
    productContainer:{
        width:'100%',
        height:350,
    },
    
    
    subtitle:{
        color:colors.primary,
        fontSize:25,
        fontWeight:'bold',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
    }
})