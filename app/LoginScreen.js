/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from './Components/context';

const LoginScreen = () => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
    });

    const { signIn } = React.useContext(AuthContext);

    return (<View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <TextInput placeholder="Your Email"
                    style={styles.textInput} autoCapitalize="none" />
            </View>
            <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
            <View style={styles.action}>
                <TextInput placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={true} />
            </View>
            <View style={styles.button}><TouchableOpacity  style={styles.signIn} onPress={() => {signIn();}}><Text style={[styles.textSign, { color: '#fff' }]}>Login</Text></TouchableOpacity></View>
        </View>
    </View>);
};

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: 0,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#009387',
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default LoginScreen;
