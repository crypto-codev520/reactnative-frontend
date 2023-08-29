/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useMemo, useCallback} from 'react';
import Footer from './footer';
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
type SectionProps = PropsWithChildren<{
  title: string;
  amount: number;
  fee: number;
}>;

function Section({children, title, amount, fee}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      {
        (title=='BTC' && <Image source={require('./assets/coins/BTC.png')} style={{width: 50, height: 50, marginRight: 10}}/>)||
        (title=='BCH' && <Image source={require('./assets/coins/BCH.png')} style={{width: 50, height: 50, marginRight: 10}}/>) ||
        (title=='CET' && <Image source={require('./assets/coins/CET.png')} style={{width: 50, height: 50, marginRight: 10}}/>) ||
        (title=='ETH' && <Image source={require('./assets/coins/ETH.png')} style={{width: 50, height: 50, marginRight: 10}}/>)
      }
      <View style={{flex: 1}}>
        <View style={styles.sectionInfo}>
          <Text style={{color: 'black', fontSize: 18}}> {title} </Text>
          <Text style={{color: 'black', fontSize: 18}}> 0 </Text>
        </View>
        <View style={styles.sectionInfo}>
          <Text style={{color: 'gray', fontSize: 18}}> $ {amount} <Text style={{color:'red', fontSize: 18}}>-{fee}%</Text> </Text>
          <Text style={{color: 'gray', fontSize: 18}}> =0.00 USD</Text>
        </View>
      </View>      
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={main.backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{flex: 1}}>
        <View
          style={{
            borderRadius: 13,
            backgroundColor: "rgb(60,60,85)",
            padding: 15,
            paddingLeft: 22,
            paddingRight: 22,
            margin: 12,
          }}
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>
            <Text style={{ color: 'white' }}>Assets</Text>
            <View style={{
              borderWidth: 1,
              borderRadius: 30,
              padding: 7,
              paddingLeft: 20,
              paddingRight: 20,
              borderColor: 'rgb(185,185,185)',
              backgroundColor: 'transparent',
              paddingHorizontal: 8,
            }}>
              <Text style={{color: 'white'}}>All Networks</Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: "flex-end"
            }}>
            <Text style={{fontSize:30, color:"white"}}>0 </Text>
            <Text style={{color: "rgb(185,185,185)"}}>USD</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: "flex-end",
            marginTop: 12
            }}>
            <View style={{
              width:'47%',
              marginRight: '6%',
              alignItems: 'center',
              borderColor: 'rgb(185,185,185)',
              borderWidth: 1,
              borderRadius: 8,
              padding: 10,
            }}>
              <Text style={{fontSize:16, color:"rgb(185,185,185)"}}>Send</Text>
            </View>
            <View style={{
              width:'47%',
              alignItems: 'center',
              borderColor: 'rgb(185,185,185)',
              borderWidth: 1,
              borderRadius: 8,
              padding: 10,
            }}>
              <Text style={{fontSize:16, color:"rgb(185,185,185)"}}>Receive</Text>
            </View>
          </View>
        </View>
        
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 12,
            }}>
            <View style={{
              padding: 7,
              marginRight: "16%",
              borderBottomWidth: 3,
            }}>
              <Text style={{fontSize:20, color:"black", fontWeight: 'bold'}}>Assets</Text>
            </View>
            <View style={{
              padding: 7,
            }}>
              <Text style={{fontSize:20, color:"rgb(185,185,185)"}}>NFT</Text>
            </View>
          </View>
          {/* display coins */}
          <View style={main.div_a}>
            <View style={main.flex_row}>
              <Image source={require('./assets/icons/line-height.png')} style={{width: 40, height: 40}} />
              <View 
                style = {main.input}
              >
                <Image source={require('./assets/icons/search.png')} style={{width: 20, height: 20}} />
                <TextInput
                style={main.textInput}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search"
                keyboardType="numeric"
              />
              </View>
            </View>
            <View style={main.flex_row}>
              <Text style={{color: 'black'}}> Add Assets  </Text>
              <Image source={require('./assets/icons/add.png')} style={{width: 20,height: 20}} />
            </View>
          </View>
          <View style={main.coinboard}>
            <Section title='BTC' amount={26054.73} fee={1.69}></Section>
            <Section title='BCH' amount={190.58} fee={1.97}></Section>
            <Section title='CET' amount={0.0332} fee={0.31}></Section>
            <Section title='ETH' amount={1648.74} fee={2.20}></Section>
          </View>
        </View>  
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    padding: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  sectionInfo: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 2
  }
});

const main = StyleSheet.create({
  backgroundStyle:{
    backgroundColor: Colors.lighter,
    height: '100%'
  },
  coinboard:{
    paddingBottom: 100
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    height: 40,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: 'rgb(230,230,230)',
  },
  textInput:{
    height: 40,
    width: 110,
  },
  coinBoard: {
    flexDirection: 'column'
  },
  div_a: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  flex_row: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  search_bar: {
    flexDirection: 'row'
  }
})

export default App;
