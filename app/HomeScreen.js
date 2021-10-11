/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    // render(){
    return (<View style={styles.container}>
        <Text>Welcome Home!!!</Text>
        <Button><Text>Logout</Text></Button>
    </View>);
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
