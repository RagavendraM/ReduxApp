/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native-paper';

import RootStackScreen from './app/RootStackScreen';
import {AuthContext} from './app/Components/context';
import  HomeScreen  from './app/HomeScreen';
// import  SplashScreen from './app/SplashScreen';


const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('ffk');
      setIsLoading(false);
    }, signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    }, signUp: () => {
      setUserToken('ffk');
      setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  // if (isLoading) {
  //   return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <ActivityIndicator size="large" />
  //   </View>);
  // } else {
    console.log(userToken);
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
           {userToken !== null ? (<RootStackScreen />) : (<HomeScreen />)}
        </NavigationContainer>
      </AuthContext.Provider>);
  // }

};



export default App;
