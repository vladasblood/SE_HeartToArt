import { KeyboardAvoidingView, StyleSheet, TextInput, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import styles from '../styles/styles';
import { auth, db, firestore } from '../firebase';

import logopic from "../assets/Heart.png" 
import styles from '../styles/Login&Signup-Styles.js'
import { getDocs, doc, query, collection, getFirestore, getDoc } from 'firebase/firestore';
const backImage = require("../assets/BlueBackground.jpg")

export default function LoginScreen() {
 
  const navigation = useNavigation();
  const [userType, setUserType] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [validMessage, setValidMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    try {
    const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnapshot = await getDoc(docRef);
        setUserType(docSnapshot.data().accountType);
    } catch  (error) {
        console.log("Cannot get data.")
    }
  }

  const verifyEmail = () => {
    getData();
    try {
        if (auth.currentUser.emailVerified) {
            if (userType == 'client') {
                navigation.navigate('NavigationBarClient', { screen: 'ClientHome' });
            } else if (userType == 'artist') {
                navigation.navigate('NavigationBarArtist', { screen: 'Feed' });
            }
        } else {
            alert("Please verify your email.");
        }
    } catch (e) {
        console.log(e);
    }
  }

  const onHandleLogin = async () => {
    if (email !== "" && password !== ""){
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            verifyEmail();
        })
        .catch(error => {
          setErrorMessage(error.message);
        })
    } else {
      setErrorMessage("Please Enter Correct Email and Password");
    }
  };

  const forgotPassword = () => {
    // handle
    navigation.navigate("Reset");
  };

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />

      {/* White Background */}
      <View style = {styles.whiteSheet} />
        <KeyboardAvoidingView
          style = {styles.loginContainer} 
          behavior="height" 
          keyboardVerticalOffset={0}>
            
          {/* Back Button */}
          <TouchableOpacity 
            style = {styles.backButtonContainer} 
            onPress={() => navigation.replace('Home')}>
            <Ionicons 
              name="arrow-back-sharp" 
              size={27} 
              color="#ffffff"
            />  
          </TouchableOpacity>

          {/* Heading Text and Logo */}
          <View style = {styles.headingContainer}>
            <Image source={logopic} style={styles.loginLogoImage}/>
            <Text style = {styles.heading}>Welcome to Heart to Art.</Text>
          </View> 
          
          {/* Inside Blue Container */}
          <View style =  {styles.componentContainer}>

            <Text style = {styles.title}>Login</Text>

            <Text>{validMessage}</Text>
            <Text style = {styles.errorText}>{errorMessage}</Text>

            {/* Username */}            
            <TextInput
              placeholder ="Enter Username"
              keyboardType='email-address'
              textContentType='emailAddress'
              value = {email}
              style = {styles.input}
              onChangeText = {text => setEmail(text)}
            />

            {/* Password */}
            <TextInput
              placeholder = "Enter Password"
              value = {password}
              style = {styles.input}
              secureTextEntry = {true}
              onChangeText = {text => setPassword(text)} 
            />

            {/* Forgot Password? */}
            <TouchableOpacity>  
              <Text 
               onPress={forgotPassword}
              style = {styles.forgotPassText}>Forgot Password?</Text> 
            </TouchableOpacity>

            {/* Login */}
            <TouchableOpacity
              style={styles.button}
              onPress={onHandleLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Don't have an account? */}
            <View style = {styles.noAccountContainer}>
              <Text style = {styles.noAccountText}>Don't have an account?</Text> 
              <TouchableOpacity>  
                <Text 
                onPress={() => navigation.replace('Register')}
                style = {styles.smallSignUp}>Sign Up
                </Text> 
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
    </View>
  )
};