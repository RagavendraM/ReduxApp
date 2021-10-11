/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class SplashScreen extends Component {
    render() {
        return (<View style={styles.container}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('LoginScreen'); }}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Welcome to CK App!!!</Text>
            </TouchableOpacity>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009387',
    },
});

export default SplashScreen;
