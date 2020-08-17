import React from 'react'
import { View, Text,StyleSheet} from 'react-native'

import Card from '../components/Card/Card'

export default function ProductListScreen() {
    return (
        <View style={styles.layout}>
            <Card 
                title='Red jacket for sale'
                subtitle='$100'
                image={require('../assets/jacket.jpg')}
            />
            {/* <Card 
                title='Red jacket for sale'
                subtitle='$100'
                image={require('../assets/jacket.jpg')}
            />
            <Card 
                title='Red jacket for sale'
                subtitle='$100'
                image={require('../assets/jacket.jpg')}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex:1,
        padding:20,
        marginTop:50,
        backgroundColor: '#f8f4f4',
        alignItems:'flex-start',   
        justifyContent:'flex-start',
    }
})
