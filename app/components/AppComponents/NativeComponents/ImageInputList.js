
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './ImageInput';



function ImageInputList({imageUris = [], width, height,
                        size,icon, 
                        onAddImage, onRemoveImage}) { 
  return (
    <View style={styles.container}>
        {imageUris.map((uri)=>(   
          <View key={uri} style={styles.image}>
            <ImageInput 
              imageUri={uri.toString()}
              onChangeImage={()=> onRemoveImage(uri)} 
              width={width}
              height={height}
              size={size}
              icon={icon}
            />
            </View>
        ))}
        <ImageInput 
                imageUri={null}
                onChangeImage={(uri)=> onAddImage(uri)} 
                width={width}
                height={height}
                size={size}
                icon={icon}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{ 
        // padding:5,
        flexDirection:"row",
        flex:1,
        margin: 1 ,
        alignItems:"center",
        justifyContent:"center",
    },
    image: {
      margin:5,
    }
})

export default ImageInputList;