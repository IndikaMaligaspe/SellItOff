import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AppForm from '../components/AppComponents/Form/AppForm';
import AppFormField from '../components/AppComponents/Form/AppFormField';
import AppFormSubmitIcon from '../components/AppComponents/Form/AppFormSubmit';
import Card from '../components/Card/Card';
import ListComponent from '../components/ListComponents/ListComponent';
import ListItemSeperator from '../components/ListComponents/ListItemSeperator';
import Screen from '../components/ScreenComponents/Screen';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../configs/colors';

const data  = {
                _id: "5f5c0f4ce45c060a70e27c7f",
                content: "Also what is your last price ?",
                dateTime: "2020-09-11T23:59:08.870Z",
                fromUser:  {
                    _id: 3,
                    images:  [
                        {
                            url: "http://192.168.1.6:9000/assets/undefined_thumb.jpg",
                        },
                        ],
                    name: "mosh",
                },
                listingId: "5f58c9c402eb0b3054107041",
                toUser:  {
                _id: 3,
                images:  [
                     {
                    url: "http://192.168.1.6:9000/assets/40be7b80ab4ef3c5d9a4358fad37d83e_thumb.jpg",
                    },
                ],
                name: "indika",
                },
            }

    const messages = [
                        { _id: "1",
                          message: "abcd",
                          date: "Thursday,10th Sept ",
                          user: "Mosh",  
                        },
                        { _id: "2",
                          message: "efg",
                          date: "Thursday,10th Sept ",
                          user: "You"   ,
                        },
                        { _id: "3",
                          message: "hij",
                          date: "Saturday,12th Sept",
                          user: "Mosh",
                               
                        },
                        { _id: "4",
                          message: "abcd",
                          date: "Friday,12th Sept",
                          user: "You",
                        },  
                        { _id: "5",
                        message: "hij",
                        date: "Saturday,12th Sept",
                        user: "Mosh",
                             
                      },
                      { _id: "6",
                        message: "abcd",
                        date: "Friday,12th Sept",
                        user: "You",
                      },   
                      { _id: "7",
                      message: "hij",
                      date: "Saturday,12th Sept",
                      user: "Mosh",
                           
                    },
                    { _id: "8",
                      message: "abcd",
                      date: "Friday,12th Sept",
                      user: "You",
                    },                                                                                                  
             ]        
    

export default function ChatScreen() {
    const handleSubmit=()=>{

    }
    return (
        <Screen>
            <View style={{flex:1}}>
                 <FlatList 
                   style={styles.listStyle}
                   data={messages}
                   keyExtractor={data=> data._id}
                   renderItem={({item}) =>
                        item.user === "You" ?
                          (<Card 
                                title={item.date}
                                subtitle = {item.message}
                                viewStyle={styles.yourStyle}

                         />)
                         :
                         (<Card 
                            title={item.date}
                            subtitle = {item.message}
                            viewStyle={styles.friendStyle}
                        />)
                        
                   }
                   ItemSeparatorComponent={()=><ListItemSeperator/>}  
                   />

            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    listStyle:{
        backgroundColor:colors.lightGrey,
        marginBottom:10,
        flex:1,
    },
    yourStyle:{
        backgroundColor:'green',
        marginBottom:10,
        marginTop:10,
        marginLeft:40,        
    },
    friendStyle:{
        backgroundColor:'white',
        marginBottom:10,
        marginTop:10,
        marginLeft:5,
    },
    messageField:{
        width:'40%',
        flex:1,
    }

})
