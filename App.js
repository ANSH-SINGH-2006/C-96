import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import EncryptScreen from './screens/EncryptScreen'
import DecryptScreen from './screens/DecryptScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {AppTabNavigator} from './components/AppTabNavigator'


export default function App() {
  return (
    
    <AppContainer/>

  );
}

const SwitchNavigator= createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  BottomTab: {screen: AppTabNavigator}
})

const AppContainer=createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
