import React, {useState,useEffect} from 'react'
import { StyleSheet } from 'react-native'

import * as Yup  from 'yup'


import AppForm from '../components/AppComponents/Form/AppForm'
import AppFormField from '../components/AppComponents/Form/AppFormField'
import AppFormImagePicker from '../components/AppComponents/Form/AppFormImagePicker'
import AppFormPicker from '../components/AppComponents/Form/AppFormPicker'
import AppFormSubmit from '../components/AppComponents/Form/AppFormSubmit'
import AppProgressBar from '../components/AppComponents/AppProgressBar'
import colors from '../configs/colors'
import IconPickerItem from '../components/AppComponents/IconPickerItem'
import listingsApi from '../api/listings'
import Screen from '../components/ScreenComponents/Screen'
import useLocation from '../hooks/useLocation'
import cateGoryListApI  from '../api/categoryList'

import useApi from '../hooks/useApi'





const categories = [
  {
    label:'Furniture', 
    value: 1,
    icon:
      {
        name:'floor-lamp',
        backgroundColor:'#fc5c65',
        color:'#fff',
        size:30
      }
  },
  {
    label:'Cars', 
    value: 2,
    icon:
      {
        name:'car',
        backgroundColor:'#fd9644',
        color:'#fff',
        size:30
      }
  },
  {
    label:'Cameras', 
    value: 3,
    icon:
      {
        name:'camera',
        backgroundColor:'#fed330',
        color:'#fff',
        size:30
      }
  },
  {
    label:'Games', 
    value: 4,
    icon:
      {
        name:'cards',
        backgroundColor:'#26de81',
        color:'#fff',
        size:30
      }
  },
  {
    label:'Clothing', 
    value: 5,
    icon:
      {
        name:'shoe-heel',
        backgroundColor:'#2bcbba',
        color:'#fff',
        size:30
      }
  },
  {
    label:'Sports', 
    value: 6,
    icon:
      {
        name:'basketball',
        backgroundColor:'#45aaf2',
        color:'#fff',
        size:30
      }
  },
  ,
  {
    label:'Movies & Music', 
    value: 7,
    icon:
      {
        name:'headphones',
        backgroundColor:'#4b7bec',
        color:'#fff',
        size:30
      }
  },
]

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(4).label("Title"),
    description: Yup.string().required().min(4).label("Description"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    imageList: Yup.array().min(1,"Please select at least one image"),
});

export default function ListingEditScreen() {
    const location = useLocation();
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);
    

    const getCategoryListApi = useApi(cateGoryListApI.getCategoryList)
    
    useEffect(() => {
      getCategoryListApi.request();
    }, [])

    // console.log(`data -- ${JSON.stringify(getCategoryListApi.data)}`);

    const handleSubmit = async (data, resetForm) => {
      // console.log(data);
      setProgress(0);
      setVisible(true);
      const result = await listingsApi.postlisting(
                            {...data, location},
                            (progress) => setProgress(progress));
      if (!result.ok){
        setVisible(false)
        return alert('Culd not save data');
      }
      resetForm();
    }
    return (
        <Screen style={styles.container}>
          <AppProgressBar 
            visible={visible} 
            progress={progress} 
            onDone={()=>setVisible(false)}/>
            <AppForm
            initialValues={{
                title:"" , 
                price:"", 
                category: null, 
                description:"",
                imageList:[]
            }}
            onSubmit={(values, {resetForm})=>handleSubmit(values, resetForm)}
            validationSchema={validationSchema}
            >    
                <AppFormImagePicker 
                  // imageUris={imageList} 
                  fieldName="imageList"
                />
                <AppFormField
                    autoCapitalized={false}
                    autoCorrect={false}
                    color={colors.secondary}
                    fieldName="title"
                    placeholder="Title"
                    placeholderTextColor="black"
                    maxLength={255}
                />
                <AppFormField
                    autoCapitalized={false}
                    autoCorrect={false}
                    color={colors.secondary}
                    fieldName="price"
                    placeholder="Price"
                    placeholderTextColor="black"
                    keyboardType="numeric"
                    maxLength={8}
                    width={120}
                />
                <AppFormPicker 
                    size={20}
                    color= {colors.darkBackground}
                    placeholder="Category"
                    placeholderTextColor="black"
                    categories={getCategoryListApi.data}
                    fieldName="category" 
                    width={200}
                    PickerItemComponent={IconPickerItem}
                    numberOfColumns={3}/>
                <AppFormField
                    autoCapitalized={false}
                    autoCorrect={false}
                    color={colors.secondary}
                    fieldName="description"
                    placeholder="Description"
                    placeholderTextColor="black"
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