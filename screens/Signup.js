
import React, { useState } from 'react'
import { Image, Alert, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../config/firebase";

import logopic from "../assets/Heart.png" 
import styles from '../styles/Login&Signup-Styles.js'
const backImage = require("../assets/BlueBackground.jpg")

// Exporting Component Login Screen
export default function Signup({navigation}) {

  //const navigation = useNavigation();
	const [email, setEmail] = useState('')    
	const [password, setPassword] = useState('') 

  // Authenticate User with Email and Password
	const onHandleLSignUp = () => {
		if (email !== "" && password !== "") {
			createUserWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Sign Up Success"))
      .catch((err) => Alert.alert("Sign Up error", err.message));
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
          
          {/* Inside White Container*/}
          <View style =  {styles.componentContainer}>
            <Text style = {styles.title}>Sign Up</Text>

            {/* Email Label */}
            <TextInput
              placeholder ="Enter Email"
              // autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
              // autoFocus={true}
              value = {email}
              style = {styles.inputSignUp}
              onChangeText = {text => setEmail(text)}
            />

            {/* Password Label */}
            <TextInput
              placeholder = "Enter Password"
              value = {password}
              style = {styles.inputSignUp}
              secureTextEntry = {true}
              onChangeText = {text => setPassword(text)} 
            />

            {/* Sign Up Button*/}
            <TouchableOpacity
              style={styles.button}
              onPress={onHandleLSignUp}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View> 
        </KeyboardAvoidingView>
    </View>
  )
}
