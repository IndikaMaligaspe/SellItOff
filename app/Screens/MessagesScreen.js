import React from 'react';
import { View, Text, FlatList } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import ListComponent from '../components/ListComponents/ListComponent';
import Screen from '../components/ScreenComponents/Screen';
import ListItemSeperator from '../components/ListComponents/ListItemSeperator';
import ListItemDeleteAction from '../components/ListComponents/ListItemDeleteAction';
import { useState } from 'react';

const initMessages = [
    {
        id:1,
        title:'T1',
        description: 'D1',
        image:require('../assets/profileImage.png')
    },
    {
        id:2,
        title:'T2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        image:require('../assets/profileImage.png')
    },

];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initMessages);
    const [refreshing, setRefreshing] = useState(false);
    
    const handleDelete = message =>{
        setMessages(messages.filter((m) => m.id !== message.id));
    };
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message)=>message.id.toString()}
                renderItem={({item})=>(
                    <Swipeable renderRightActions={()=> 
                        <ListItemDeleteAction 
                            onPress={()=>handleDelete(item)}/>}>
                        <ListComponent
                            title={item.title}
                            subtitle = {item.description}
                            image={item.image}
                            onPress={()=> console.log(item)}
                            showCheveron={true}                        
                            />
                    </Swipeable>
                )}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={()=>{
                    setMessages([
                        {
                            id:3,
                            title:'T3',
                            description: 'D3',
                            image:require('../assets/mosh.jpg')
                        },
                    ]);
                }}
            />
        </Screen>
    )
}
export default MessagesScreen;