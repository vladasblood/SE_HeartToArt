import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import LoginScreen from './RegisterScreen';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import styles from '../styles/styles.js';

const HomeScreen = () => {
  // const navigation = useNavigation();
  // navigation.navigate('Register')
  const navigation = useNavigation();

  //Login
  const handleLogin = () => {
    navigation.navigate("Login");
  };
    
  //Register
  const handleRegister = () => {
    navigation.navigate("Register");
  };
  
  return (
    <View style={styles.buttonContainer}>
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
        onPress={handleRegister}
      >
        <Text style={styles.buttonOutlineText}>Register</Text>
      </TouchableOpacity>

    </View>
  )
}

export default HomeScreen

