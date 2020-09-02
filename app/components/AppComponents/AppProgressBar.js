import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';

import * as Progress from 'react-native-progress'
import LotieView from 'lottie-react-native'
import colors from '../../configs/colors';



function AppProgressBar({progress, visible,onDone}) {
  return (
      <Modal visible={visible}>
          <View style={styles.container}>
             {progress !== 1 && 
                <Progress.Bar 
                    progress={progress} 
                    width={200} 
                    color={colors.secondary}/>
             }
             {progress ===1  && 
                <LotieView 
                    autoPlay={true} 
                    loop={false}  
                    source={require('../../assets/animations/done.json')} 
                    onAnimationFinish={onDone} 
                    style={styles.animations} />
            }
          </View>
      </Modal>
    
  );
}

const styles = StyleSheet.create({
  animations: {
     width:150,
  },
  container: {
      alignItems:"center",
      flex:1,
      justifyContent:"center",
  },
});

export default AppProgressBar;