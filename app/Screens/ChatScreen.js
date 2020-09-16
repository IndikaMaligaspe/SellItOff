import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Card from '../components/Card/Card';
import ListItemSeperator from '../components/ListComponents/ListItemSeperator';
import Screen from '../components/ScreenComponents/Screen';


import colors from '../configs/colors';
import ChatControl from '../components/ScreenComponents/ChatControl';

import ChatsAPI from '../api/chats'
import useApi from '../hooks/useApi';

  const messageMeta  = {
    _id: "5f5c0f4ce45c060a70e27c7f",
    content: "Also what is your last price ?",
    dateTime: "2020-09-11T23:59:08.870Z",
    fromUser:  {
        // _id: "5f583aa8570bc8419072f733",
        _id: "5f56fb77ddbda93564b7248b",
        images:  [
            {
                url: "http://192.168.1.6:9000/assets/undefined_thumb.jpg",
            },
            ],
        name: "mosh",
    },
    listingId: "5f58c9c402eb0b3054107041",
    toUser:  {
    // _id: "5f56fb77ddbda93564b7248b",
    _id: "5f583aa8570bc8419072f733",
    images:  [
        {
        url: "http://192.168.1.6:9000/assets/40be7b80ab4ef3c5d9a4358fad37d83e_thumb.jpg",
        },
    ],
    name: "indika",
    },
  }
        
    

export default function ChatScreen() {
    const getChatByListingByBuyerAPI = useApi(ChatsAPI.getChatsForListingByUser);
    const getChatApi = useApi(ChatsAPI.sendChatMessage);
    const [refreshing, setRefreshing] = useState(false);
    const fromUserId  =  '5f56fb77ddbda93564b7248b';
    const toUserId =  '5f583aa8570bc8419072f733';
    const listingId =  '5f58c9c402eb0b3054107041';

    useEffect(() =>{
      getChatByListingByBuyerAPI.request(listingId, toUserId,fromUserId);
    },[]);

    const refreshData = () =>{
      setRefreshing(true);
      getChatByListingByBuyerAPI.request(listingId, toUserId,fromUserId);
      setRefreshing(false);
    }

    const handleSubmit= async (message) =>{
      let data = {
        message:message.message,
        fromUser:messageMeta.fromUser._id,
        toUser:messageMeta.toUser._id,
        listing:messageMeta.listingId,
        images:[],
        
      }
      // console.log(data);
      try {
        let response = await getChatApi.request(data);  
        refreshData();
      } catch (error) {
        console
         Alert.alert("Chat Error","Could not connect to the server.");
      } 
      
    }
    return ( 
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <FlatList 
                      style={styles.listStyle}
                      data={getChatByListingByBuyerAPI.data} 
                      keyExtractor={(data, index)=> index.toString()}
                      renderItem={({item}) =>
                            item.sender === "You" ?
                              (<Card 
                                    title={`${item.dateStr} @ ${item.timeStr}`}
                                    image={item.images}
                                    subtitle = {item.content}
                                    viewStyle={styles.viewStyle}
                                    titleStyle={styles.titleStyle}
                                    subtitleStyle={styles.subtileStyle}
                            />)
                            :
                            (<Card 
                                title={`${item.dateStr} @ ${item.timeStr}`}
                                image={item.images}
                                subtitle = {item.content}
                                viewStyle={styles.friendStyle}
                                titleStyle={styles.titleStyle}
                                subtitleStyle={styles.subtileStyle}
                            />)
                            
                      }
                      ItemSeparatorComponent={()=><ListItemSeperator/>} 
                      refreshing={refreshing}
                      onRefresh={()=>refreshData()}                    
                      />
                  </View>
                  <View style={{flex:.1}}>
                    <ChatControl 
                    handleSubmit={handleSubmit} />
                  </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      width:'100%',
      height:'100%',
    },
    friendStyle:{
      backgroundColor:colors.chatBackgroundPlain,
      marginLeft:5,
      flex:1,
    },
    listStyle:{
        backgroundColor:colors.lightGrey,
        marginBottom:10,
    },
    titleStyle:{
      textAlign:"left",
      fontSize:14,
    },
    subtileStyle:{
        color:colors.darkText, 
        marginStart:10,      
    },
    viewStyle:{
      backgroundColor:colors.chatBackgroundProminent,
      marginBottom:10,
      marginTop:10,
      marginLeft:40,
    }

})
