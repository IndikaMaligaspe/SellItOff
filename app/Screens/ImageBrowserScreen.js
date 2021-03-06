import React, { useState } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'

import AppChatMessage from '../components/AppComponents/AppChatMessage';
import AppImageBrowser from '../components/AppComponents/AppImageBrowser';
import navigation from '../Navigators/rootNavigation';

import chatAPI from '../api/chats';
import useApi from '../hooks/useApi';


// const messageMeta  = {
//   _id: "5f5c0f4ce45c060a70e27c7f",
//   content: "Also what is your last price ?",
//   dateTime: "2020-09-11T23:59:08.870Z",
//   fromUser:  {
//       _id: "5f583aa8570bc8419072f733",
//       // _id: "5f56fb77ddbda93564b7248b",
//       images:  [
//           {
//               url: "http://192.168.1.6:9000/assets/undefined_thumb.jpg",
//           },
//           ],
//       name: "mosh",
//   },
//   listingId: "5f58c9c402eb0b3054107041",
//   toUser:  {
//   _id: "5f56fb77ddbda93564b7248b",
//   // _id: "5f583aa8570bc8419072f733",
//   images:  [
//        {
//       url: "http://192.168.1.6:9000/assets/40be7b80ab4ef3c5d9a4358fad37d83e_thumb.jpg",
//       },
//   ],
//   name: "indika",
//   },
// }


export default function ImageBrowserScreen({route}) {
    const [photos, setPhotos] = useState([])
    const getChatApi = useApi(chatAPI.sendChatMessage);
    const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;
    const noCameraPermissionComponent = <Text style={styles.emptyStay}>No access to camera</Text>;
    const messageData = route.params

    const handleSubmit = async (message) =>{
        let data = {
          message:message.message,
          fromUser:messageData.fromUser._id,
          toUser:messageData.toUser._id,
          listing:messageData.listingId,
          images:photos,
          
        }
        try {
          let response = await getChatApi.request(data);  
          navigation.navigate("ChatScreen");
        } catch (error) {
           Alert.alert("Chat Error","Could not connect to the server.");
        } 
        
      }
      const setImages = (images) =>{
        if (images) setPhotos(images);
      }
    return (
        <View style={[ styles.container]}>
            <View style={styles.fileBrowser}>
              <AppImageBrowser
                  max={4}
                  setImages={setImages}
              />
            </View>
            <View style={styles.chatStyle}>
                <AppChatMessage
                  handleSubmit={handleSubmit} />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
      chatStyle:{
        flex:.1, 
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
