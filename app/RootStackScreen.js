/* eslint-disable prettier/prettier */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator screenOptions={{
        headerShown: false,
      }}>
    <RootStack.Screen name="SplashScreen" component = { SplashScreen } />
    <RootStack.Screen name="LoginScreen" component = { LoginScreen } />
    </RootStack.Navigator>
);

export default RootStackScreen;
