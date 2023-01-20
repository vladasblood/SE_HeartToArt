import { KeyboardAvoidingView, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';
import InlineTextButton from '../styles/InlineTextButton.js';
import { auth, currentUser } from '../firebase';
const LoginScreen = () => {

  //Initializations  
  // const app = initializeApp(firebaseConfig);
  const navigation = useNavigation();
  // const auth = getAuth(app);
  
  if (auth.currentUser) {
    navigation.navigate("UserProfile");
  }

  const [errorMessage, setErrorMessage] = useState("");
  const [validMessage, setValidMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");


  const handleLogin = () => {
    if (email !== "" && password !== ""){
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          navigation.navigate("UserProfile", {user: userCredential.user});
        })
        .catch(error => {
          setErrorMessage(error.message)
        })
    } else {
      setErrorMessage("Please Enter Correct Email and Password");
    }
  }

  //Log In Existing User Account
 

  //Sign Out
  const handleSignOut = () => {
    auth.signOut()
    .then(() => {   
        navigation.replace("Login")    
    })
    .catch(error => alert(error.message))
  }  

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "null"}
      keyboardVerticalOffset={60}
      >
      
      <View style={styles.inputContainer}>

        <Text>{validMessage}</Text>
        <Text style = {styles.errorText}>{errorMessage}</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />

        <View style={styles.rowContainer}>
          <Text style={styles.input}>Create Account ?
            <InlineTextButton text="Register"
              onPress={() => navigation.navigate("Register")}
            />
          </Text>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.input}>Reset Password ?
            <InlineTextButton text="Reset"
              onPress={() => navigation.navigate("Reset")}
            />
          </Text>
        </View>

      </View>
      
      <View style={styles.buttonContainer}>

        {/* LOG-IN */}
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonOutlineText}>Log In</Text>
        </TouchableOpacity>

      </View>


      {/* <View style = {styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
        onPress = {handleSignOut}
        style = {styles.button}
        > 
          <Text style={styles.buttonText}
            onPress={() => navigation.navigate("Home")}>Sign out</Text>
        </TouchableOpacity>
 
      </View> */}

  </KeyboardAvoidingView>
  )
};

export default LoginScreen