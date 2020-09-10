import React, { useEffect, useState, useContext} from 'react'
import {StyleSheet,FlatList, View, ScrollViewComponent} from 'react-native'

import ActivityLoader from '../components/AppComponents/ActivityLoader'
import AppButton from '../components/AppComponents/AppButton'
import AppText from '../components/AppComponents/AppText'
import Card from '../components/Card/Card'
import ListItemSeperator from '../components/ListComponents/ListItemSeperator'
import listingsApi from '../api/listings'
import route from '../Navigators/routes'
import { ScrollView } from 'react-native-gesture-handler'
import AuthContext from '../auth/context'

export default function MyListingsScreen({userId=1,navigation}) {
    const [refreshing, setRefreshing] = useState(false)
    const getListingsApi = useApi(listingsApi.getMyListings)
    const {user}  = useContext(AuthContext)
    
    useEffect(() => {
       getListingsApi.request(user._id);
    }, [])

    const refresh =() =>{
        setRefreshing(true);
        getListingsApi.request(user._id)
        setRefreshing(false);
    }
    return (
        <React.Fragment>
            <ActivityLoader visible={getListingsApi.loading} />
            <View style={styles.container}>
                {getListingsApi.error && (
                    <React.Fragment>
                        <AppText>Sorry , could not load data.</AppText> 
                        <AppButton title="Retry" onPress={getListing}/>
                    </React.Fragment>
                )}
                
                <FlatList style={styles.layout}
                    data={getListingsApi.data}
                    renderItem={({item})=><Card 
                        title={item.title}
                        subtitle={item.price}
                        imageURL={item.images.length? item.images[0].url: null}
                        thumbnailURL={item.images.length? item.images[0].thumbnailUrl: null}
                        onPress={()=>navigation.navigate(route.PRODUCT_DETAILS, {item: item})}
                    />}
                    keyExtractor={data => data._id}
                    ItemSeparatorComponent={()=><ListItemSeperator/>} 
                    refreshing={refreshing}
                    onRefresh={refresh}
                    />
            </View>
            </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding:20,
        backgroundColor: '#f8f4f4',
        justifyContent:"center",
        alignItems:"center",
    }
});
