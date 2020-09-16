import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import navigation from '../../Navigators/rootNavigation'

import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TextInput } from 'react-native'
import AppTextInput from '../AppComponents/AppTextInput'
import IconComponent from '../AppComponents/IconComponent'
import AppFormField from '../AppComponents/Form/AppFormField'
import AppForm from '../AppComponents/Form/AppForm'
import AppFormImagePicker from '../AppComponents/Form/AppFormImagePicker'
import AppChatMessage from '../AppComponents/AppChatMessage'

export default function ChatControl({color="black", handleSubmit}) {
    const imagePicker = () =>{
        navigation.navigate("AppImageBrowser");
    }
    return (
        <View style={styles.container}>
            <AppForm
             initialValues={{
                message:"",
                imageList:[],
            }}
            >
                 <IconComponent 
                    name="plus"
                    size={80}
                    width={40}
                    height={40}
                    borderRadious={1}
                    imagePicker={imagePicker}
                />
                <IconComponent 
                    name="camera"
                    size={80}
                    width={40}
                    height={40}
                    borderRadious={1}
                />
                <View style={styles.textContainer}>
                <AppChatMessage
                    handleSubmit={handleSubmit} />
                </View>
        </AppForm>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        width:'100%',
        alignItems:'center'
    },
    textContainer:{
        // flexDirection:'column', 
        width:'65%'
    }

})
