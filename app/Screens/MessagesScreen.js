import React,  {useEffect, useContext } from 'react';
import  { useState } from 'react';
import { FlatList  ,StyleSheet, View, Alert } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import IconComponent from '../components/AppComponents/IconComponent';
import ListComponent from '../components/ListComponents/ListComponent';
import ListItemSeperator from '../components/ListComponents/ListItemSeperator';
import ListItemDeleteAction from '../components/ListComponents/ListItemDeleteAction';

import colors from '../configs/colors';

import messagesApi from '../api/messages';

import routes from '../Navigators/routes';
import AuthContext from '../auth/context';



function MessagesScreen({navigation}) {
    const [refreshing, setRefreshing] = useState(false);
    const getMessagesApi = useApi(messagesApi.getMessages);
    const {user} = useContext(AuthContext);
    // const [messages, setMessages] = useState();
    useEffect(() => {
        getMessagesApi.request(user);
     }, [])
     
    // setMessages(getMessagesApi.data);

     const refresh =() =>{
         setRefreshing(true);
         getMessagesApi.request(user);
         setRefreshing(false);
    }

    const handleDelete = message =>{
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    const handleNoData = () => {
        navigation.navigate(routes.ACCOUNT);
    }
    if ((getMessagesApi.data) &&  (getMessagesApi.data.length === 0)){
        Alert.alert(`Hi, ${user.name}`,'Your message box is empty',[{text:'OK', onPress:handleNoData}])
        return <View></View>
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={getMessagesApi.data}
                keyExtractor={(message)=>message._id}
                renderItem={({item})=>(
                    <Swipeable renderRightActions={()=> 
                        <ListItemDeleteAction 
                            onPress={()=>handleDelete(item)}/>}>
                        <ListComponent
                            title={item.fromUser.name}
                            subtitle = {item.content}
                            image={{uri:item.fromUser.images[0].url}}
                            ImageComponent={<IconComponent 
                                                    name="account"
                                                    size={40}
                                                    color={colors.darkBackground} 
                                                />}
                            onPress={()=> console.log(item)}
                            showCheveron={true}                        
                            />
                    </Swipeable>
                )}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={refresh}
            />
        </View>
    )
    // }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop:40,
        flex:1,
    },
});
export default MessagesScreen;