import { KeyboardAvoidingView, StyleSheet, TextInput, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import styles from '../styles/styles';
import { auth, db } from '../firebase';

import logopic from "../assets/Heart.png" 
import styles from '../styles/Login&Signup-Styles.js'
const backImage = require("../assets/BlueBackground.jpg")

export default function LoginScreen() {
 
  const navigation = useNavigation();
 
  // if artist then home screen is feed

  const verifyEmail = () => {
    if (auth.currentUser.emailVerified) {
        navigation.navigate('NavigationBar', { screen: 'Feed' });
    } else {
        alert("Please verify your email.");
    }
  }
  

  // if client then home screen is search
  

  const [errorMessage, setErrorMessage] = useState("");
  const [validMessage, setValidMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  

  const onHandleLogin = async () => {
    if (email !== "" && password !== ""){
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            verifyEmail();
          console.log("UID is", userUID);
          //Updating UID to the logged in user  
          navigation.navigate("UserProfile", {user: userCredential.user.uid});
        })
        .catch(error => {
          setErrorMessage(error.message)
        })
    } else {
      setErrorMessage("Please Enter Correct Email and Password");
    }
  }

  const forgotPassword = () => {
    // handle
    
  }

//   //Sign Out
//   const onandleSignOut = () => {
//     auth.signOut()
//     .then(() => {   
//         navigation.replace("Login")    
//     })
//     .catch(error => alert(error.message))
//   }  

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

//  <KeyboardAvoidingView style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : "null"}
//       keyboardVerticalOffset={60}
//       >
      
//       <View style={styles.inputContainer}>

//         <Text>{validMessage}</Text>
//         <Text style = {styles.errorText}>{errorMessage}</Text>
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={text => setEmail(text)}
//           style={styles.input}
//         />

//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={text => setPassword(text)}
//           style={styles.input}
//           secureTextEntry={true}
//         />

//         <View style={styles.rowContainer}>
//           <Text style={styles.input}>Create Account ?
//             <InlineTextButton text="Register"
//               onPress={() => navigation.navigate("Register")}
//             />
//           </Text>
//         </View>

//         <View style={styles.rowContainer}>
//           <Text style={styles.input}>Reset Password ?
//             <InlineTextButton text="Reset"
//               onPress={() => navigation.navigate("Reset")}
//             />
//           </Text>
//         </View>

//       </View>
      
//       <View style={styles.buttonContainer}>

//         LOG-IN 
//         <TouchableOpacity
//           style={[styles.button, styles.buttonOutline]}
//           onPress={handleLogin}
//         >
//           <Text style={styles.buttonOutlineText}>Log In</Text>
//         </TouchableOpacity>

//       </View>


//        <View style = {styles.container}>
//         <Text>Email: {auth.currentUser?.email}</Text>
//         <TouchableOpacity
//         onPress = {handleSignOut}
//         style = {styles.button}
//         > 
//           <Text style={styles.buttonText}
//             onPress={() => navigation.navigate("Home")}>Sign out</Text>
//         </TouchableOpacity>
 
//       </View> 

//    </KeyboardAvoidingView> 