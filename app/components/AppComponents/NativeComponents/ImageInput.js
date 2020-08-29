import React from 'react';
import { StyleSheet,Image, View, Alert } from 'react-native';


import * as ImagePicker from 'expo-image-picker'
import IconComponent from '../IconComponent';

import colors from '../../../configs/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



function ImageInput({imageUri, onChangeImage, ...props}) {
    // console.log(imageUri);
    const selectImage = async () =>{
        try{
           const result = await ImagePicker.launchImageLibraryAsync({
               mediaTypes: ImagePicker.MediaTypeOptions.Images,
               quality: 0.5,
           });
           if (!result.cancelled)
            onChangeImage(result.uri);
        }catch(error){
          console.log("Error loading image ...",error)
        }
    }
    const handlePress = () =>{
        if (!imageUri) selectImage()
        else{
            Alert.alert("Delete Image","Do you want to delete this image?",
            [
                {text : 'Yes', onPress: () => onChangeImage(imageUri)},
                {text : 'No'},
            ]
            )
        }
    }
  return (
   <TouchableWithoutFeedback onPress={()=>handlePress()}>   
        <View style={styles.container}>
            {imageUri && <Image 
                source={{uri:imageUri}}
                style={styles.image}
            />}
            {!imageUri && 
                <IconComponent
                    name="camera"
                    size={60}
                    color={colors.darkBackground}
                    backgroundColor={colors.dullbackgraound}
                    borderRadious={8}
                />
            }
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width:60,
    height:60,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center",
    overflow:"hidden",
  },
  image:{
     width:'100%',
     height:'100%',
    },
});

export default ImageInput;