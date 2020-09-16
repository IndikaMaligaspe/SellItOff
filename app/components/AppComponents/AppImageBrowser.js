import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {ImageBrowser} from 'expo-image-picker-multiple'


export default function AppImageBrowser(props) {

    const imagesCallback =  (callback) => {
      let cPhoto = []
      callback.then( (photos) => {
      photos.map((photo, i) => {
          cPhoto.push({
            uri: photo.uri,
            name: photo.filename,
            type: "image/png",
        });
      });
        props.setImages(cPhoto);
      });
    };
    
    const updateHandler = async (count, onSubmit) => {
      const photos = await onSubmit()
    };
    
    const renderSelectedComponent = (number) => {
      return(
        
        <View style={styles.countBadge}>
          <Text style={styles.countBadgeText}>{number}</Text>
        </View>
      );
      }
    const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;
    const noCameraPermissionComponent = <Text style={styles.emptyStay}>No access to camera</Text>;

    return (
        <View style={[ styles.container]}>
            <View style={styles.fileBrowser}>
                <ImageBrowser
                max={props.max}
                onChange={updateHandler}
                callback={imagesCallback}
                renderSelectedComponent={renderSelectedComponent}
                emptyStayComponent={emptyStayComponent}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
      chatStyle:{
        flex:.15, 
        width:"80%",
        alignSelf:"center",
      },
      container: {
        paddingTop: 25,
        flex:1,
        justifyContent:"center",
      },
      countBadge: {
        paddingHorizontal: 8.6,
        paddingVertical: 5,
        borderRadius: 50,
        position: 'absolute',
        right: 3,
        bottom: 3,
        justifyContent: 'center',
        backgroundColor: '#0580FF'
      },
      countBadgeText: {
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 'auto',
        color: '#ffffff'
      },
      emptyStay:{
        textAlign: 'center',
      },
      fileBrowser:{
          flex:1, 
      }

})
