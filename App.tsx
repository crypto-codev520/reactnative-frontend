/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useMemo, useCallback} from 'react';
import Footer from './footer';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/mainboard';
import AboutMe from './components/aboutMe';
const Stack = createStackNavigator();
import { Image } from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Main} />
        <Stack.Screen name="about" component={AboutMe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
