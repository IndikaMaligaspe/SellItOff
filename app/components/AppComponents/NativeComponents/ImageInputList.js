import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import ImageInput from './ImageInput';



function ImageInputList({imageUris = [], onAddImage, onRemoveImage}) {
//   console.log(imageUris)  
  return (
    <View style={styles.container}>
        {imageUris.map((uri)=>(   
          <View key={uri} style={styles.image}  >
            <ImageInput 
              imageUri={uri.toString()}
              onChangeImage={()=> onRemoveImage(uri)} 
            />
          </View>
        ))}
        <ImageInput 
                imageUri={null}
                onChangeImage={(uri)=> onAddImage(uri)} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{ 
        padding:5,
        flexDirection: 'row', 
        margin: 1 
    },
    image: {
      margin:5,
    }
})

export default ImageInputList;