import React, { useState } from 'react'
import { Image, Alert, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../config/firebase";

import logopic from "../assets/Heart.png" 
import styles from '../styles/Login&Signup-Styles.js'
const backImage = require("../assets/BlueBackground.jpg")

export default function Login({navigation}) {

	const [email, setEmail] = useState('')    
	const [password, setPassword] = useState('') 

  //Authenticate User with Email and Password
	const onHandleLogin = () => {
		if (email !== "" && password !== "") {
			signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Login Success"))
      .catch((err) => Alert.alert("Login error", err.message));
		}
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
                onPress={() => navigation.replace('Signup')}
                style = {styles.smallSignUp}>Sign Up
                </Text> 
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
    </View>
  )
}