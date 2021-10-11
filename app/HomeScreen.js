/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    // render(){
    return (<View style={styles.container}><Text>Welcome Home!!!</Text></View>);
    // }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009387',
    },
});

export default HomeScreen;
