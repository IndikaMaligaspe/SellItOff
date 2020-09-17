import React from 'react'
import { StyleSheet,  View } from 'react-native'

import navigation from '../../Navigators/rootNavigation'

import IconComponent from '../AppComponents/IconComponent'
import AppForm from '../AppComponents/Form/AppForm'
import AppChatMessage from '../AppComponents/AppChatMessage'
import routes from '../../Navigators/routes'
import colors from '../../configs/colors'

export default function ChatControl({color="black", handleSubmit}) {
    const imagePicker = () =>{
        navigation.navigate(routes.CHAT_IMAGE_BROWSER);
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
                    color={colors.mediumGrey}
                />
                <IconComponent 
                    name="camera"
                    size={80}
                    width={40}
                    height={40}
                    borderRadious={1}
                    color={colors.mediumGrey}
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
        // flex:1,
        flexDirection:"row",
        width:'100%',
        alignItems:'center'
    },
    textContainer:{
        // flexDirection:'column', 
        width:'65%'
    }

})
