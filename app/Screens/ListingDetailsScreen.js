import React, { useEffect, useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import {Image} from 'react-native-expo-image-cache';


import AppText from '../components/AppComponents/AppText';
import ListComponent from '../components/ListComponents/ListComponent';

import useApi from '../hooks/useApi';
import userApi from '../api/user';

import colors from '../configs/colors';
import SellerMessenger from '../components/ScreenComponents/SellerMessenger';

export default function ListingDetailsScreen({route}) {
    const getUserApi = useApi(userApi.getUser);
    const postMessagesApi = useApi(userApi.userMessage);
    const [user, setUser]  = useState({id: 0, name: '', listings: 0, images:[{url: ""}]});
    const [profilePicture, setProfilePicture] = useState();
    useEffect(() => {
        loadUserDetails();
    },[])
    const item =  route.params.item;
    const userId = item.userId; 
    
    const loadUserDetails = async () =>{
        const results = await getUserApi.request(userId);
        
        if(!results.ok) return;
        setUser(results.data);
    }
    
    const handleSubmit = async (values, resetForm) => {
        const results = await postMessagesApi.request(values.message, item.id);
        // console.log(results);
        if(!results.ok) return;
        
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >

            <View style={styles.container}>
                <ScrollView>
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
                    {user.images[0].url !== "" && <ListComponent 
                    image={{uri:user.images[0].url}} 
                    title={user.name}
                    subtitle={user.listings +" listings"} />}
                    <SellerMessenger 
                        handleSubmit={handleSubmit}
                    />
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
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
    messageField:{
        color:"black",
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