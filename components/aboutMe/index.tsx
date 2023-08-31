/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useMemo, useCallback} from 'react';
import type {PropsWithChildren} from 'react';
import Footer from '../../footer';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Alert,
} from 'react-native';

import { Image } from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function AboutMe(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, onChangeText] = useState('');

  return (
     <SafeAreaView style={styles.backgroundstyle}>
          <View style={styles.Navbar}>
               <Image source={require('../../assets/icons/notification.png')}  style={{width: 30, height: 30}}/>
               <Text style={{color: 'black', fontSize: 22}}> Me </Text>
               <Image source={require('../../assets/icons/night.png')}  style={{width: 30, height: 30}}/>
          </View>
          <ScrollView style={{flex: 1, paddingBottom: 300}}>
               <View style={styles.margin}>
                    <View style={styles.itemContainer}>
                         <Image source={require('../../assets/icons/manage-wallet.png')} style={{width: 25, height: 25, marginRight: 5, flex: 0}}/>
                         <Text style={{color: 'black', fontSize: 20, flex: 1}}> Manage Wallet </Text>
                         <Text style={{color: 'gray', fontSize: 25, flex: 0}}> {">"} </Text>
                    </View>
                    <View style={styles.itemContainer}>
                         <Image source={require('../../assets/icons/Address-book.jpg')} style={{width: 25, height: 25, marginRight: 5, flex: 0}}/>
                         <Text style={{color: 'black', fontSize: 20, flex: 1}}> Address Book </Text>
                         <Text style={{color: 'gray', fontSize: 25, flex: 0}}> {">"} </Text>
                    </View>
                    <View style={styles.itemContainer}>
                         <Image source={require('../../assets/icons/advanced-features.png')} style={{width: 25, height: 25, marginRight: 5, flex: 0}}/>
                         <Text style={{color: 'black', fontSize: 20, flex: 1}}> Advanced Feature </Text>
                         <Text style={{color: 'gray', fontSize: 25, flex: 0}}> {">"} </Text>
                    </View>
               </View>


               <View style={styles.margin}>
                    <View style={styles.itemContainer}>
                         <Image source={require('../../assets/icons/security-settingspng.png')} style={{width: 25, height: 25, marginRight: 5, flex: 0}}/>
                         <Text style={{color: 'black', fontSize: 20, flex: 1}}> Security Settings </Text>
                         <Text style={{color: 'gray', fontSize: 25, flex: 0}}> {">"} </Text>
                    </View>
                    <View style={styles.itemContainer}>
                         <Image source={require('../../assets/icons/preferences-settings.png')} style={{width: 25, height: 25, marginRight: 5, flex: 0}}/>
                         <Text style={{color: 'black', fontSize: 20, flex: 1}}> Preferences Settings </Text>
                         <Text style={{color: 'gray', fontSize: 25, flex: 0}}> {">"} </Text>
                    </View>
               </View>


               <View style={styles.margin}>
                    <View style={styles.itemContainer}>
                         <Image source={require('../../assets/icons/guide.png')} style={{width: 25, height: 25, marginRight: 5, flex: 0}}/>
                         <Text style={{color: 'black', fontSize: 20, flex: 1}}> Beginner's Guide </Text>
                         <Text style={{color: 'gray', fontSize: 25, flex: 0}}> {">"} </Text>
                    </View>
                    <View style={styles.itemContainer}>
                         <Image source={require('../../assets/icons/help.png')} style={{width: 25, height: 25, marginRight: 5, flex: 0}}/>
                         <Text style={{color: 'black', fontSize: 20, flex: 1}}> Help Center </Text>
                         <Text style={{color: 'gray', fontSize: 25, flex: 0}}> {">"} </Text>
                    </View>
                    <View style={styles.itemContainer}>
                         <Image source={require('../../assets/icons/product-suggestion.png')} style={{width: 25, height: 25, marginRight: 5, flex: 0}}/>
                         <Text style={{color: 'black', fontSize: 20, flex: 1}}> Product Suggestions </Text>
                         <Text style={{color: 'gray', fontSize: 25, flex: 0}}> {">"} </Text>
                    </View>
               </View>

               <View style={styles.margin}>
                    <View style={styles.itemContainer}>
                         <Image source={require('../../assets/icons/blog.png')} style={{width: 25, height: 25, marginRight: 5, flex: 0}}/>
                         <Text style={{color: 'black', fontSize: 20, flex: 1}}> Blog </Text>
                         <Text style={{color: 'gray', fontSize: 25, flex: 0}}> {">"} </Text>
                    </View>
                    <View style={styles.itemContainer}>
                         <Image source={require('../../assets/icons/contact.png')} style={{width: 25, height: 25, marginRight: 5, flex: 0}}/>
                         <Text style={{color: 'black', fontSize: 20, flex: 1}}> About Us </Text>
                         <Text style={{color: 'gray', fontSize: 25, flex: 0}}> {">"} </Text>
                    </View>
                    <View style={styles.walletBtn}>
                         <Text style={{color: 'rgb(60,200,60)', fontSize: 20}}> Share ViaWallet </Text>
                    </View>
               </View>
          </ScrollView>
          <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
     backgroundstyle: {
          backgroundColor: Colors.lighter,
          flexDirection: 'column',
          height: '100%'
     },
     walletBtn: {
          marginTop: 30,
          width: '60%',
          height: 60,
          borderRadius: 35,
          borderWidth: 2,
          borderColor: 'rgb(60,200,60)',
          justifyContent: 'center',
          alignItems: 'center'
     },
     Navbar: {
          flexDirection:'row',
          justifyContent: 'space-between',
          borderTopWidth: 1,
          borderTopColor: 'lightgray',
          zIndex: 5,
          top: 0,
          width: '100%',
          height: 50,
          padding: 15,
          paddingTop: 2,
          paddingBottom: 2,
          alignItems: 'center',
          backgroundColor: 'white',
          marginBottom: 10,
          flex: 0 
     },
     margin: {
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          backgroundColor: 'white'
     },
     itemContainer: {
          flexDirection: 'row',
          padding: 20,
          paddingTop: 9,
          paddingBottom: 9,
          backgroundColor: 'white',
          borderBottomColor: 'rgb(240,240,240)',
          borderBottomWidth: 1,
          alignItems: 'center'
     }
});

export default AboutMe;
