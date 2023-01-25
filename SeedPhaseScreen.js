import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import { Button } from 'react-native';
import { YellowBox } from 'react-native-web';



export default function SeedScreen ({navigation}) {
  
    return(
        <View style={styles.container}>
            
            <StatusBar style="auto" />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    buttonContainer:{
      margin:20
    },
    bannerImage: {
      width: '70%',
      height: '70%',
      resizeMode: 'contain'
    },
    chImage: {
      width: '68%',
      height: '68%',
      resizeMode: 'contain'
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'left',
      alignSelf: 'center'
    },
    mainText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    helpText: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10
    },
    hintText: {
      fontSize: 16,
      marginTop: 15
    }
  });