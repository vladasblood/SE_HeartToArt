import { Image, Alert, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import logopic from "../assets/Heart.png" 
import styles from '../styles/styles.js'


const LoginScreen = () => {
    const [email, setEmail] = useState('')    
    const [password, setPassword] = useState('')  

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const navigation = useNavigation();
    
    //To Remove Back-option
    useEffect(()=>{
        const unsub = auth.onAuthStateChanged(user => {
        if (user) {
            navigation.replace('Home')
        } 
    })
        return unsub
    }, [])

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
            // console.log(user);
            // navigation.replace('Home')
        })
        .catch(error => {
            console.log(error)
        })
        
    }

  return (
    <KeyboardAvoidingView
        style = {styles.loginContainer} behavior="height" keyboardVerticalOffset={0}>

        {/* Heading Text and Logo */}
        <View style = {styles.loginHeadingContainer}>

            <Image source={logopic} style={styles.loginLogoImage}/>

            <Text style = {styles.heading}>Pour your hearts into art and see a world full of creative minds</Text>
        </View> 
        


        <View style =  {styles.loginComponentContainer}>

        <Text style = {styles.signUpText}>Login</Text>

        
        <TextInput
            placeholder ="Email"
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

            {/* LOGIN */}
            <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

        </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen