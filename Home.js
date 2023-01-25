import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import { Button } from 'react-native';

export default function Home ({navigation}) {
  
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.mainText}>Get the world's first non-custodial cypher card</Text>
                <Text style={styles.helpText}>Explore all of Web3 in one place</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Image source={require('./assets/swap.png')} style={styles.bannerImage}></Image>
                  <Text style={styles.hintText}>Swap to get instant USD</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Image source={require('./assets/buy.png')} style={styles.bannerImage}></Image>
                  <Text style={styles.hintText}>Buy at an affordable price</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Image source={require('./assets/chain.png')} style={styles.chImage}></Image>
                  <Text style={styles.hintText}>9 Chains Supported - More coming soon!</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Image source={require('./assets/browser.png')} style={styles.bannerImage}></Image>
                  <Text style={styles.hintText}>Accepted all over the world</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
            <Button
  
                // Some properties given to Button
                title="CREATE NEW WALLET >"
                color="#009933"
                onPress={() => Alert.alert(
                    'New Wallet button is pressed')}
                    
            />
            </View>
            <View style={styles.buttonContainer}>
            <Button
  
                // Some properties given to ButtoN
                title="IMPORT EXISTING WALLET >"
                onPress={() => Alert.alert(
                    '')}
                    
            />
            </View>
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
      //flex: 1,
    //justifyContent: 'space-between',
    //backgroundColor: '#ecf0f1',
    //padding: 8,
    //flexDirection:'row',
    //alignItems:'center'
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
      //textAlign: 'center',
      marginTop: 15
    }
  });