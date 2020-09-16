import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTextInput from './AppTextInput'
import IconComponent from './IconComponent'

export default function AppChatMessage({handleSubmit}) {
    const [message, setMessage] = useState()
    const handleSelect = ()=>{
        handleSubmit({message})
    }
    return (
        <View style={styles.container}>
           <AppTextInput
                    style={{backgroundColor:'grey'}}
                    fieldName="message"
                    placeholder=""
                    onChangeText={text=>setMessage(text)}
                />
                <IconComponent 
                    name="send-circle-outline"
                    size={80}
                    width={40}
                    height={40}
                    borderRadious={1}
                    imagePicker={handleSelect}
                />
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
})
