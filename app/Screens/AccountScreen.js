import React, {useContext} from 'react'
import { View, StyleSheet } from 'react-native'

import AuthContext from '../auth/context';
import authStore from '../auth/store'
import ListComponent from '../components/ListComponents/ListComponent';
import Screen from '../components/ScreenComponents/Screen';
import colors from '../configs/colors';
import IconComponent from '../components/AppComponents/IconComponent';
import ListItemSeperator from '../components/ListComponents/ListItemSeperator';

import { FlatList } from 'react-native-gesture-handler';
import useAuth from '../auth/useAuth';


const items = [
    {
        title: "My Listings",
        icon:{
            name:"format-list-bulleted",
            size:40,
            color:colors.lightBackground,
            backgroundColor:colors.secondary
        },
    },
    {
        title: "My Messages",
        icon:{
            name:"email",
            size:40,
            color:colors.lightBackground,
            backgroundColor:colors.primary
        },
    },
]
export default function AccountScreen({navigation}) {
    const {user, logOut} =  useAuth()
    const loadScreen=(item)=>{
        if (item.title === "My Messages"){
            navigation.navigate("Messages");
        }else if (item.title === "My Listings"){
            navigation.navigate("MyListings");
        }  
    }

   const handleLogout = () =>{
      logOut()
    }
    console.log(user);
    return (
        <Screen style={styles.container}>
            <View>
                <View style={{
                    backgroundColor:'#fff',
                    paddingBottom:10,
                    marginTop:30,
                }}>
                    <ListComponent
                    image={{uri:user.images[0].url}}
                    title={user.name}
                    subtitle={user.email} />
                </View>
                <FlatList style={styles.list} 
                data = {items}
                keyExtractor = {(item)=> item.title}
                renderItem={({item})=>
                    <ListComponent
                        title = {item.title}
                        ImageComponent = {
                            <IconComponent 
                                name={item.icon.name}
                                color={item.icon.color}
                                backgroundColor={item.icon.backgroundColor}
                                size={item.icon.size}
                                />
                            }
                        onPress = {()=>loadScreen(item)}    
                    />
                }
                ItemSeparatorComponent={()=>
                    <ListItemSeperator style={styles.listItemSeperator}/>} 
                />
                <View style={styles.logout}>
                    <ListComponent
                        title="Log Out"
                        ImageComponent={<IconComponent 
                            name='logout'
                            color={colors.lightBackground}
                            backgroundColor={colors.logout}
                            size={40} 
                            />}
                            onPress={()=>handleLogout()}>
                    </ListComponent>
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.dullbackgraound,
    },
    list:{
      backgroundColor:colors.lightBackground, 
      marginTop:40,
    },
    listItemSeperator:{
        backgroundColor:colors.dullbackgraound,
        height:1,
    },
    logout:{
        backgroundColor:colors.lightBackground,
        marginTop:20,

    }
})