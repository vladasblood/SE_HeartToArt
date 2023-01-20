import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig, createUserDocument} from '../firebase';
import { TabRouter, useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';
import styles from '../styles/styles.js';
import InlineTextButton from '../styles/InlineTextButton.js';
import { auth, db, currentUser } from '../firebase';

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [validMessage, setValidMessage] = useState("");
    // const app = initializeApp(firebaseConfig);
    // const auth = getAuth(app);
    const navigation = useNavigation();

    let validateAndSet = (value, valueToCompare, setValue) => {
        if (value !== valueToCompare) {
            setValidMessage("Passwords do not match");
        } else {
            setValidMessage("");
        }

        setValue(value);
    };


    //Write New User Data
    let addToDatabase = () => {
        const newUser = collection(db, "users");
        addDoc(newUser, {FirstName, LastName, email, password, confirmPassword})
            .then(response => {
                console.log(response)
        })
            .catch(error => {
                console.log(error.message)
        })
    };
   
    let handleSignUp = () => {
        if (password === confirmPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                sendEmailVerification(auth.currentUser);
                navigation.replace("UserProfile", {user: userCredential.user});
            })
            .catch((error) => {
                // Handle Errors here.
                setValidMessage(error.message);
            });
        }
    };

    let combinedData =() => {
        handleSignUp();
        addToDatabase();
    };

  return (
    <KeyboardAvoidingView
        style = {styles.container}
        behavior={Platform.OS === "ios"? "padding" : "null"}
        keyboardVerticalOffset={60}
    >
      <View style =  {styles.inputContainer}>

        <Text style = {[styles.errorText]}>{validMessage}</Text>

        <TextInput
            placeholder ="First Name"
            value = {FirstName}
            onChangeText = {setFirstName}
            style = {styles.input}
        />

        <TextInput
            placeholder ="Last Name"
            value = {LastName}
            onChangeText = {setLastName}
            style = {styles.input}
        />

        <TextInput
            placeholder ="Email"
            value = {email}
            onChangeText = {setEmail}
            style = {styles.input}
        />

        <TextInput
            placeholder = "Password"
            value = {password}
            onChangeText = {(value) => validateAndSet(value, confirmPassword, setPassword)} 
            style = {styles.input}
            secureTextEntry
        />

        <TextInput
            placeholder = "Confirm Password"
            value = {confirmPassword}
                  onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)} 
            style = {styles.input}
            secureTextEntry
        />

        <View style = {styles.rowContainer}>
            <Text style = {styles.input}>Existing Account Already? 
                <InlineTextButton text = "Login" 
                    onPress = {() => navigation.navigate("Login")}
                />
            </Text>
        </View>

      </View>
        
      <View style = {styles.buttonContainer}>
      
            {/* SIGN UP */}
            <TouchableOpacity
                style={[styles.button, styles.buttonOutline]}
                onPress={combinedData}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>  
            </TouchableOpacity>

       
      </View>

    </KeyboardAvoidingView>
  );
};

export default RegisterScreen
