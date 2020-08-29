import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Button, FlatList } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultStyles from '../../configs/styles'
import AppText from './AppText';

import Screen from '../ScreenComponents/Screen'
import ListPickerItem from './ListPickerItem';


export default function AppPicker({ categories, icon, placeholder, size=20, 
                                    onSelectItem, selectedItem, width,
                                    PickerItemComponent=ListPickerItem, numberOfColumns=1 }) {
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
                <View style={[styles.container, {width}]}>
                    <MaterialCommunityIcons style={styles.icon}
                        name={icon}
                        size={size}
                    />    
                    {selectedItem ? 
                            <AppText style={styles.selected}> {selectedItem.label} </AppText>
                            :
                            <AppText style={styles.text}> {placeholder} </AppText>
                    }
                    
                    <MaterialCommunityIcons 
                        name="chevron-down"
                        size={size}
                        color={defaultStyles.colors.mediumGrey}
                    />    
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={show}>
                <Screen >
                    <Button title="Close" onPress={()=>setShow(false)}></Button>
                    <View style={styles.flatListContainer}>
                        <FlatList 
                        data={categories}
                        keyExtractor={(item)=>item.value.toString()}
                        renderItem={({item})=>
                        <View style={styles.itemPicker}>
                            <PickerItemComponent
                                item={item}
                                onPress={()=>handlePick(item)}
                            />
                            
                        </View>
                        }
                        numColumns={numberOfColumns}/>
                    </View>
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor: defaultStyles.colors.dullbackgraound,
        borderRadius:25,
        padding:5,
        marginVertical:10,
    },
    flatListContainer:{
        flex:1,
        paddingTop:10,
        padding:10,
    },
    icon:{
        marginRight:5,
    },
    itemPicker:{ 
        flex: 1, 
        flexDirection: 'column', 
        margin: 1 
    },
    text:{
        flex:1,
        color:  defaultStyles.colors.lightGrey
    },
    selected:{
        flex:1,
        color: defaultStyles.colors.mediumGrey
    }

})