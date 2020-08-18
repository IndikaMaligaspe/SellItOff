import React, { useState } from 'react'
import Constants from 'expo-constants'
import { View, Text,StyleSheet,FlatList} from 'react-native'

import Card from '../components/Card/Card'
import ListItemSeperator from '../components/ListComponents/ListItemSeperator'
import Screen from '../components/ScreenComponents/Screen'

const initialData = [{
    id:1,
    title:'Red jacket for sale',
    price:'$100',
    image:require('../assets/jacket.jpg'),
},
{
    id:2,
    title:'Couch in great condition',
    price:'$1000',
    image:require('../assets/couch.jpg'),
}]
export default function ProductListScreen() {
    const [data, setData] = useState(initialData);
    const [refreshing, setRefreshing] = useState(false);
    return (
        <Screen>
            <FlatList style={styles.layout}
                data={data}
                renderItem={({item})=><Card 
                    title={item.title}
                    subtitle={item.price}
                    image={item.image}
                    onPress={()=>console.log("Clicked Item",item)}
                />}
                keyExtractor={data => data.id.toString()}
                ItemSeparatorComponent={()=><ListItemSeperator/>} 
                refreshing={refreshing}
                onRefresh={()=> {
                    setData([
                        {
                            id:3,
                            title:'Garbage',
                            price:'$1000',
                            image:require('../assets/couch.jpg'),
                        } 
                    ])
                }
                }
                />
        </Screen>
    )
}

const styles = StyleSheet.create({
    layout: {
        width:'100%',
        padding:20,
        backgroundColor: '#f8f4f4',
    }
})
