import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles/styles.js';
import InlineTextButton from '../styles/InlineTextButton.js';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';

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
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "null"}
            keyboardVerticalOffset={60}
        >
            <View style={styles.inputContainer}>

                <Text style={[styles.errorText]}>{errorMessage}</Text>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />

                <View style={styles.rowContainer}>
                    <Text style={styles.input}>A Reset Password Link has 
                    been sent to your email
                    </Text>
                </View>

            </View>

            <View style={styles.buttonContainer}>

                {/* RESET PASSWORD */}
                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={resetPassword}
                >
                    <Text style={styles.buttonOutlineText}>Reset</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    )
};

export default ResetPassword
