import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import EncryptScreen from '../screens/EncryptScreen'
import DecryptScreen from '../screens/DecryptScreen'

export const AppTabNavigator=createBottomTabNavigator({

    
    Encrypt: {screen: EncryptScreen,
    navigationOptions: {tabBarLabel: 'Encrypt',
    tabBarIcon : <Image source={require("../assets/encryption.png")} style={{width:20, height:20}}/>
}




    },
    Decrypt: {screen: DecryptScreen,
        navigationOptions: {tabBarLabel: 'Decrypt',
        tabBarIcon : <Image source={require("../assets/decrypt.png")} style={{width:20, height:20}}/>
    }
        },
    
})
