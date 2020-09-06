import React from 'react'
import { StyleSheet,  View } from 'react-native'

import AppForm from '../AppComponents/Form/AppForm';
import AppFormField from '../AppComponents/Form/AppFormField';
import AppFormSubmit from '../AppComponents/Form/AppFormSubmit'

import colors from '../../configs/colors'

export default function SellerMessenger({handleSubmit}) {
    return (
        <View style={{padding:15, marginTop:10}}>
            <AppForm
                initialValues={{
                    message:"",
                }}
                onSubmit={(values, {resetForm})=>handleSubmit(values, resetForm)}
                >
                
                <AppFormField style={styles.messageField} 
                    fieldName="message"
                    placeholder="Message"
                    color='white'
                    width={120}
                    placeholderTextColor = "black"
                />
                <AppFormSubmit 
                    title="Contact Seller" 
                    color={colors.secondary}
                    textColor={colors.lightBackground}
                    padding={5} 
                />
            </AppForm>    
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
});
