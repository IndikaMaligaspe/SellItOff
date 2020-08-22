import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Button, FlatList } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultStyles from '../../configs/styles'
import AppText from './AppText';

import Screen from '../ScreenComponents/Screen'
import PickerItem from './PickerItem';

export default function AppPicker({categories, icon, placeholder, size=20, onSelectItem, selectedItem }) {
    const [show, setShow] = useState(false)
    const [placeHolderText, setPlaceHolderText] = useState(placeholder)
    
    const handlePick=(item)=>{
        setPlaceHolderText(item.label);
        onSelectItem(item);
        setShow(false);
    }
    return (
        <>
            <TouchableWithoutFeedback onPress={()=>setShow(true)}>
                <View style={styles.container}>
                    <MaterialCommunityIcons style={styles.icon}
                        name={icon}
                        size={size}
                        color={defaultStyles.colors.mediumGrey}
                    />            
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeHolderText}
                    </AppText>
                    <MaterialCommunityIcons 
                        name="chevron-down"
                        size={size}
                        color={defaultStyles.colors.mediumGrey}
                    />    
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={show}>
                <Screen>
                    <Button title="Close" onPress={()=>setShow(false)}></Button>
                    <FlatList 
                      data={categories}
                      keyExtractor={(item)=>item.value.toString()}
                      renderItem={({item})=>
                       <PickerItem 
                         label={item.label}
                         onPress={()=>handlePick(item)}
                       />
                      }/>
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        backgroundColor: defaultStyles.colors.dullbackgraound,
        borderRadius:25,
        padding:5,
        marginVertical:10,
    },
    icon:{
        marginRight:5,
    },
    text:{
        flex:1,
    }
})