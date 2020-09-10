import React, { useEffect} from 'react'
import {StyleSheet,FlatList} from 'react-native'

import ActivityLoader from '../components/AppComponents/ActivityLoader'
import AppButton from '../components/AppComponents/AppButton'
import AppText from '../components/AppComponents/AppText'
import Card from '../components/Card/Card'
import ListItemSeperator from '../components/ListComponents/ListItemSeperator'
import listingsApi from '../api/listings'
import route from '../Navigators/routes'
import Screen from '../components/ScreenComponents/Screen'

import useApi from '../hooks/useApi'

export default function ProductListScreen({navigation}) {
    const getListingsApi = useApi(listingsApi.getListings)
    useEffect(() => {
        getListingsApi.request();
    }, [])
    // console.log(getListingsApi.data); 
    return (
        <React.Fragment>
            <ActivityLoader visible={getListingsApi.loading} />
            <Screen>
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
                    // refreshing={refreshing}
                    // onRefresh={()=> {
                    //     setData([
                    //         {
                    //             id:3,
                    //             title:'Garbage',
                    //             price:'$1000',
                    //             image:require('../assets/couch.jpg'),
                    //         } 
                    //     ])
                    // }
                    // }
                    />
            </Screen>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    layout: {
        width:'100%',
        padding:20,
        backgroundColor: '#f8f4f4',
    }
})
