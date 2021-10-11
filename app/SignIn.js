/* eslint-disable prettier/prettier */
import React, { Component, useEffect, useMemo } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';



const SignIn = () => {
  const [isloading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);


  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('ffg');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('ffg');
      setIsLoading(false);
    },
  }), []);


  useEffect(() => {
    setTimeout(() => { setIsLoading(false); }, 1000);
  }, []);

  if (isloading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  else {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{}}>
           <Text>SignIn..</Text>
           </TouchableOpacity>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
});

export default SignIn;

