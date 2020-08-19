import React from 'react'
import { View, StyleSheet } from 'react-native'

import ListComponent from '../components/ListComponents/ListComponent';
import Screen from '../components/ScreenComponents/Screen';
import colors from '../configs/colors';
import IconComponent from '../components/AppComponents/IconComponent';
import ListItemSeperator from '../components/ListComponents/ListItemSeperator';

import { FlatList } from 'react-native-gesture-handler';


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
export default function AccountScreen() {
    return (
        <Screen style={styles.container}>
            <View>
                <View style={{
                    backgroundColor:'#fff',
                    paddingBottom:10,
                    marginTop:30,
                }}>
                    <ListComponent
                    image={require('../assets/profileImage.png')}
                    title='Indika Maligaspe'
                    subtitle='k.indika.maligaspe@gmail.com' />
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
                                size={item.icon.size}/>
                            }
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
                            size={40} />}>
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