import React, { useState } from 'react'
import { StyleSheet, Text, View, Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import colors from '../../configs/colors'
import AppTextInput from './AppTextInput'
import IconComponent from './IconComponent'

export default function AppChatMessage({handleSubmit}) {
    const [message, setMessage] = useState()
    const handleSelect = ()=>{
        handleSubmit({message});
        setMessage("");
    }
    return (
        
        <View style={styles.container}>
           <AppTextInput
                    style={{backgroundColor:'grey'}}
                    fieldName="message"
                    placeholder=""
                    onChangeText={text=>setMessage(text)}
                    value={message}
                />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <IconComponent 
                        name="send-circle-outline"
                        size={80}
                        width={40}
                        height={40}
                        borderRadious={1}
                        imagePicker={handleSelect}
                        color={colors.mediumGrey}
                    />
                </TouchableWithoutFeedback>
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
})
