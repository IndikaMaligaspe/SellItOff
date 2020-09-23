import React from 'react'
import { StyleSheet,  View } from 'react-native'

import navigation from '../../Navigators/rootNavigation'

import IconComponent from '../AppComponents/IconComponent'
import AppForm from '../AppComponents/Form/AppForm'
import AppChatMessage from '../AppComponents/AppChatMessage'
import routes from '../../Navigators/routes'
import colors from '../../configs/colors'

export default function ChatControl({messageData, color="black", handleSubmit}) {
    const onSelect = () =>{
        navigation.navigate(routes.CHAT_IMAGE_BROWSER, messageData);
    }
    return (
        <View style={styles.container}>
                 <IconComponent 
                    name="plus"
                    size={80}
                    width={40}
                    height={40}
                    borderRadious={1}
                    onSelect={onSelect}
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
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:'100%',
        alignItems:'center'
    },
    textContainer:{
        width:'65%'
    }

})
