import React, {useRef} from 'react';
import { StyleSheet, ScrollViewComponent, ScrollView, View } from 'react-native';
import {useFormikContext} from 'formik'

import AppErrorMessage from './AppErrorMessage';
import ImageInputList from '../NativeComponents/ImageInputList';
import ImageInput from '../NativeComponents/ImageInput';

function AppFormImagePicker({fieldName,width, height,
                            size,icon, multiImage=false}) {
    
  const scroll = useRef();
//   scroll.current.scrollToEnd();
  
  const  {setFieldValue, errors,values, touched} = useFormikContext()
  const imageUris = values[fieldName]

  const onAddImage = (uri) => {
    console.log(uri);
    setFieldValue(fieldName, [...imageUris, uri]);
  }

  const onRemoveImage = (uri) =>{
    setFieldValue(fieldName, imageUris.filter(imageUri=> imageUri !== uri))
  }
  
  return (
    <View style={styles.container}>
        <ScrollView ref={scroll} 
            horizontal 
            onContentSizeChange={()=>{scroll.current.scrollToEnd()}}>
              <ImageInputList
              imageUris={imageUris}
              onAddImage={(uri)=>onAddImage(uri)}
              onRemoveImage={(uri)=>onRemoveImage(uri)}
              width={width}
              height={height}
              size={size}
              icon={icon}
              >
              </ImageInputList>

            <AppErrorMessage error={errors[fieldName]} 
            visible={touched[fieldName]} />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});

export default AppFormImagePicker;