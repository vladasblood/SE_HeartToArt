import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles/resetStyle';
import InlineTextButton from '../styles/InlineTextButton.js';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';
import logopic from "../assets/Heart.png" 

import { Ionicons } from '@expo/vector-icons';
const backImage = require("../assets/BlueBackground.jpg")


const ResetPassword = () => {

   const navigation = useNavigation();
   const [email, setEmail] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

    let resetPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            navigation.replace("Login");
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });

        
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
                    onPress={() => navigation.replace('Login')}>
                    <Ionicons 
                    name="arrow-back-sharp" 
                    size={27} 
                    color="#ffffff"
                    />  
                </TouchableOpacity>

                {/* Heading Text and Logo */}
                <View style = {styles.headingContainer}>
                    <Image source={logopic} style={styles.loginLogoImage}/>
                    <Text style = {styles.heading}>We got you covered!</Text>
                </View> 

                {/* Inside Blue Container */}
                <Text style = {styles.title}>Reset Password</Text>

                <View style={styles.rowContainer}>
                            <Text style={styles.message}> Please enter your email address and we will send you a link to reset your password.
                            </Text>
                </View>  


                <View style={styles.inputContainer}>

                    <Text style={[styles.errorText]}>{errorMessage}</Text>

                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />

                </View>

                    <View style={styles.buttonContainer}>

                        {/* RESET PASSWORD */}
                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={resetPassword}

                        >
                            <Text style={styles.buttonOutlineText}>Reset</Text>
                        </TouchableOpacity>

                    </View>

                </KeyboardAvoidingView>
            
    </View>
    )
};

export default ResetPassword