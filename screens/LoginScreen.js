import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('')    
    const [password, setPassword] = useState('')  

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const navigation = useNavigation();
    
    //Create New User Account
    const handleSignUp  = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message);
            
        })
    }
    
    //Log In Existing User Account
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            console.log('Login successful');
            const user = userCredentials.user;
            console.log(user);
            navigation.navigate("Home")
        })
        .catch(error => {
            console.log(error)
        })
        
    }

  return (
    <KeyboardAvoidingView
        style = {styles.container}
        behavior="padding"
    >
      <View style =  {styles.inputContainer}>
        <TextInput
            placeholder ="Username"
            value = {email}
            onChangeText = {text => setEmail(text)}
            style = {styles.input}
        />

        <TextInput
            placeholder = "Password"
            value = {password}
            onChangeText = {text => setPassword(text)} 
            style = {styles.input}
            secureTextEntry
        />

      </View>

      <View style = {styles.buttonContainer}>

        {/* LOGIN */}
        <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
        >
            <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        {/* SIGN UP */}
        <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={handleSignUp}
        >
            <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,

    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItem: 'center',

    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,

    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})