import React, { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Keyboard, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native';

import Card from '../components/Card/Card';
import ListItemSeperator from '../components/ListComponents/ListItemSeperator';


import colors from '../configs/colors';
import ChatControl from '../components/ScreenComponents/ChatControl';

import ChatsAPI from '../api/chats'
import useApi from '../hooks/useApi';
import ActivityLoader from '../components/AppComponents/ActivityLoader';

        
export default function ChatScreen({route, navigation}) {
    const getChatByListingByBuyerAPI = useApi(ChatsAPI.getChatsForListingByUser);
    const getChatApi = useApi(ChatsAPI.sendChatMessage);
    const [refreshing, setRefreshing] = useState(false);
    
 
    const { fromUser } = route.params;
    const { toUser } = route.params;
    const { listingId } = route.params;
     

    const messageData = {
      fromUser: fromUser,
      toUser: toUser,
      listingId: listingId,
    }


    useEffect(() =>{

      getChatByListingByBuyerAPI.request(messageData.listingId, messageData.toUser._id,messageData.fromUser._id);
    },[]);

    const refreshData =() =>{
      setRefreshing(true);
      getChatByListingByBuyerAPI.request(messageData.listingId, messageData.toUser._id,messageData.fromUser._id);
      setRefreshing(false);
    }

    const handleSubmit= async (message) =>{
      let data = {
        message:message.message,
        fromUser:fromUser._id,
        toUser:toUser._id,
        listing:listingId,
        images:[],
        
      }
      try {
        let response = await getChatApi.request(data);  
        refreshData();
      } catch (error) {
         Alert.alert("Chat Error","Could not connect to the server.");
      } 
      
    }
    return ( 
          <React.Fragment>
            <ActivityLoader visible={getChatByListingByBuyerAPI.loading} />
           
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <FlatList 
                      // style={styles.listStyle}
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
                      onRefresh={refreshData}                  
                      />
                  </View>
                  <KeyboardAvoidingView 
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={styles.chatControl}>
                        <ChatControl 
                        handleSubmit={handleSubmit} 
                        messageData={messageData}/>
                  </KeyboardAvoidingView>
              </View>
          </React.Fragment>
    )
}

const styles = StyleSheet.create({
    chatControl:{
      backgroundColor:colors.chatBackgroundPlain,
      borderTopWidth: 1,
      borderTopColor:colors.lightGrey,
    },
    container: {
      width:'100%',
      backgroundColor: colors.lightGrey,
      justifyContent:"center",
      flex:1,
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
