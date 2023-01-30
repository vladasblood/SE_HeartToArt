import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/Home-Styles'

import logopic from "../assets/Heart.png" 
const backImage = require("../assets/BlueBackground.jpg")

const HomeScreen = () => {
  // const navigation = useNavigation();
  // navigation.navigate('Register')
  const navigation = useNavigation();

  //Login
  const handleLogin = () => {
    navigation.replace("Login");
  };
    
  //Register
  const handleRegister = () => {
    navigation.replace("Register");
  };
  
  return (
    <View style={styles.container}>
        <Image source={backImage} style={styles.backImage} />
        <KeyboardAvoidingView
            style = {styles.loginContainer} 
            behavior="height" 
            keyboardVerticalOffset={0}>
            
            {/* Heading Text and Logo */}
            <View style = {styles.headingContainer}>
            <Image source={logopic} style={styles.loginLogoImage}/>
            <Text style = {styles.title}>Pour your hearts into art, see a world full of creative minds.</Text>
            </View> 
            
            {/* Inside Blue Container */}
            <View style =  {styles.componentContainer}>
            <Text style = {styles.heading}>Join Heart to Art today.</Text>

            {/* Login Page Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Sign Up Page Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </View>

    // <View style={styles.buttonContainer}>
    //   {/* LOGIN */}
    //   <TouchableOpacity
    //     style={styles.button}
    //     onPress={handleLogin}
    //   >
    //     <Text style={styles.buttonText}>Log in</Text>
    //   </TouchableOpacity>

    //   {/* SIGN UP */}
    //   <TouchableOpacity
    //     style={[styles.button, styles.buttonOutline]}
    //     onPress={handleRegister}
    //   >
    //     <Text style={styles.buttonOutlineText}>Register</Text>
    //   </TouchableOpacity>

    // </View>
  )
}

export default HomeScreen
