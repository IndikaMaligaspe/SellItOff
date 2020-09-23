import React , {useState,useEffect} from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

import IconComponent from '../AppComponents/IconComponent'
import colors from '../../configs/colors'


export default function CameraControl({handleSwicth, handleImagePicker, handlePictureTake}) {
    const [iconList, setIconList] = useState(['google-photos','camera','camera-switch'])
    const [iconType, setIconType] = useState(['MaterialCommunity','MaterialCommunity','MaterialCommunity']); 


    const createIconList=()=>{
        if(Platform.OS === "ios"){
            setIconType(['Ionicons','MaterialCommunity','Ionicons']); 
            setIconList(['ios-photos','camera','ios-reverse-camera']);
        }
    }
    
    useEffect(()=>{
        createIconList();
    },[])
    
    return (
        <View style={styles.container}>
             <TouchableOpacity
                style={{
                alignItems: 'center',
                backgroundColor: 'transparent',                  
                }}>
                <IconComponent 
                    name={iconList[0]}
                    size={80}
                    width={40}
                    height={40}
                    borderRadious={1}
                    onSelect={handleImagePicker}
                    color={colors.mediumGrey}
                    iconType={iconType[0]}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                alignItems: 'center',
                backgroundColor: 'transparent',
                }}>
                 <IconComponent 
                    name={iconList[1]}
                    size={80}
                    width={40}
                    height={40}
                    borderRadious={1}
                    onSelect={handlePictureTake}
                    color={colors.mediumGrey}
                    iconType={iconType[1]}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                alignContent: 'center',
                backgroundColor: 'transparent',
                }}>
                <IconComponent
                    name={iconList[2]}
                    size={80}
                    width={40}
                    height={40}
                    borderRadious={1}
                    onSelect={handleSwicth}
                    color={colors.mediumGrey}
                    iconType={iconType[2]}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        flexDirection:"row",  
        justifyContent:"space-between",
        marginLeft:20,
        marginRight:20,
        
    }
})
