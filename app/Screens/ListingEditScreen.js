import React from 'react'
import { StyleSheet } from 'react-native'

import * as Yup  from 'yup'

import Screen from '../components/ScreenComponents/Screen'
import AppForm from '../components/AppComponents/Form/AppForm'
import AppFormField from '../components/AppComponents/Form/AppFormField'
import colors from '../configs/colors'
import AppFormPicker from '../components/AppComponents/Form/AppFormPicker'
import AppFormSubmit from '../components/AppComponents/Form/AppFormSubmit'



const categories = [
  {
    label:'Furniture', 
    value: 1,
  },
  {
    label:'Clothing', 
    value: 2,
  },
  {
    label:'Shoes', 
    value: 3,
  },
]

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(4).label("Title"),
    description: Yup.string().required().min(4).label("Description"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
});

export default function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
            initialValues={{
                title:"" , 
                price:"", 
                category: null, 
                description:""
            }}
            onSubmit={(values)=>console.log(values)}
            validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalized={false}
                    autoCorrect={false}
                    color={colors.secondary}
                    fieldName="title"
                    placeholder="Title"
                    maxLength={255}
                />
                <AppFormField
                    autoCapitalized={false}
                    autoCorrect={false}
                    color={colors.secondary}
                    fieldName="price"
                    placeholder="Price"
                    keyboardType="numeric"
                    maxLength={8}
                />
                <AppFormPicker 
                    size={20}
                    color= {colors.darkBackground}
                    placeholder="Category"
                    categories={categories}
                    fieldName="category" />
                <AppFormField
                    autoCapitalized={false}
                    autoCorrect={false}
                    color={colors.secondary}
                    fieldName="description"
                    placeholder="Description"
                    multiline={true}
                    numberOfLines={3}

                />
                <AppFormSubmit 
                    title="post" 
                    color={colors.secondary}
                    textColor={colors.lightBackground} 
                    padding={5}  />
            </AppForm>
        </Screen>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10, 
        padding:15,
    },
})