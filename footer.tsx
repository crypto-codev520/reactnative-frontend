/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useMemo, useCallback} from 'react';
import type {PropsWithChildren} from 'react';
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

function Footer(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={backgroundStyle}>
     <View style={styles.footer}>
          <View style={{alignItems:'center', width:'30%'}}>
               <Image source={require('./assets/wallet.png')} style={{width:25, height: 25}} />
               <Text>Wallet</Text>
          </View>
          <View style={{alignItems:'center', width:'30%'}}>
               <Image source={require('./assets/explorer.png')}  style={{width:25, height: 25}} />
               <Text>Explorer</Text>
          </View>
          <View style={{alignItems:'center', width:'30%'}}>
               <Image source={require('./assets/me.png')} style={{width:23, height: 30}} />
               <Text>Me</Text>
          </View>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
     flexDirection:'row',
     justifyContent: 'center',
     borderTopWidth: 1,
     borderTopColor: 'lightgray',
     flex: 0,
     width: '100%',
     height: 70,
     alignItems: 'center',
     backgroundColor: 'rgb(250,250,250)',
  },
  item: {

  }
});

export default Footer;
