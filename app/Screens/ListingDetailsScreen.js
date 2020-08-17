import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import AppText from '../components/AppComponents/AppText'
import ListComponent from '../components/ListComponents/ListComponent'
// import Card from '../components/Card/Card'

import colors from '../configs/colors'

export default function ListingDetailsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.productContainer}>
    <Image style={styles.image}
                    source={require('../assets/jacket.jpg')}
                />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>Red jacket for sale</AppText>
                    <AppText style={styles.subtitle}>$100</AppText>
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