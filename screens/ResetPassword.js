import { Alert, 
    KeyboardAvoidingView, 
    Platform, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
    Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import InlineTextButton from '../styles/InlineTextButton.js';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';
const backImage = require("../assets/BlueBackground.jpg")

import styles from '../styles/Login&Signup-Styles'

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
                onPress={() => navigation.replace('Home')}>
                <Ionicons 
                name="arrow-back-sharp" 
                size={27} 
                color="#ffffff"
                />  
            </TouchableOpacity>

            {/* Heading Text and Logo */}
            <View style = {styles.headingContainer}>
                <Image source={require("../assets/Heart.png" )} style={styles.loginLogoImage}/>
                <Text style = {styles.heading}>Welcome to Heart to Art.</Text>
            </View> 
            
            {/* Inside Blue Container */}
            <View style =  {styles.componentContainer}>

                <Text style = {styles.title}>Reset Password</Text>

                {/* Username */}            
                <TextInput
                placeholder ="Enter Username"
                keyboardType='email-address'
                textContentType='emailAddress'
                value = {email}
                style = {styles.input}
                onChangeText = {text => setEmail(text)}
                />

                {/* Login */}
                <TouchableOpacity
                style={styles.button}
                >
                <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>

                <View style = {styles.noAccountContainer}>
                <Text style = {styles.noAccountText}>{errorMessage}</Text> 
                </View>
            </View>
            </KeyboardAvoidingView>
        </View>
    )
};

export default ResetPassword;



{/* <KeyboardAvoidingView style={styles.inputContainer}>
<View style={styles.inputContainer}>

    <Text style={styles.errorText}>{errorMessage}</Text>

    <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
    />

    <View style={styles.rowContainer}>
        <Text style={styles.input}>A Reset Password Link has 
        been sent to your email
        </Text>
    </View>

</View>

<View style={styles.buttonContainer}>

//     {/* RESET PASSWORD */}
//     <TouchableOpacity
//         style={styles.button}
//         onPress={resetPassword}
//     >
//         <Text style={styles.buttonOutlineText}>Reset</Text>
//     </TouchableOpacity>

// </View>

// </KeyboardAvoidingView> */}