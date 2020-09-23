import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'


import CameraControl from '../../ScreenComponents/CameraControl';
// import { TouchableOpacity } from 'react-native-gesture-handler';



export default function CameraComponent() {
   const [hasCamaraPermission, setsetHasCameraPermission] = useState(null);
   const [camera, setCamera] = useState();
   const [type, setType] = useState(Camera.Constants.Type.back);

   


   const getCameraPermissions = async () =>{
        let {status} = await Camera.requestPermissionsAsync();
        if (status === "granted") 
            setsetHasCameraPermission(status);
        else    
            Alert.alert("Permission Error", "Could net get access to Device Camera");
   } 

   useEffect(()=>{
       getCameraPermissions();
   })
   
   const handleSwicth = ()=>{
        setType(
            type===Camera.Constants.Type.back 
            ? Camera.Constants.Type.front 
            : Camera.Constants.Type.back 
        );
    }

    const handleImagePicker = ()=>{
        console.log("Open Images");
    }

    const handlePictureTake =async ()=>{
        console.log("Picture Take");
        
        try {
            await takePicture();
        } catch (error) {
            console.log(error);
        }

    }

    const takePicture = async () => {
        if (camera) {
          let {uri} = await camera.takePictureAsync();
          let asset = await MediaLibrary.createAssetAsync(uri);
          console.log(asset);
        }
      }
   return (
        <View style={styles.container}>
            <Camera style={styles.camera}  type={type} ref={ref=> {setCamera(ref)}} />

            <View
                style={styles.cameraControl}>
                   <CameraControl
                    handleSwicth={handleSwicth}
                    handleImagePicker={handleImagePicker}
                    handlePictureTake={handlePictureTake}
                    />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    camera:{ flex: 1 },
    cameraView:{
        flex:1,
        backgroundColor:"transparent",
        flexDirection:"row",
    }, 
    cameraControl:{
        flex:0.1,
        alignContent:"space-between",
        justifyContent:"space-between",
        width:"100%",
    },
    container:{flex:1},
});
