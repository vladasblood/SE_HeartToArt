import { Alert, 
    KeyboardAvoidingView, 
    Image,
    Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig, createUserDocument } from '../firebase';
import { TabRouter, useLinkProps, useNavigation } from '@react-navigation/native';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';

// import styles from '../styles/styles.js';
import InlineTextButton from '../styles/InlineTextButton.js';
import { auth, db } from '../firebase';

import { Ionicons } from '@expo/vector-icons';
import logopic from "../assets/Heart.png" 
import styles from '../styles/Login&Signup-Styles.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { TurboModuleRegistry } from 'react-native';
const backImage = require("../assets/BlueBackground.jpg")

export default function RegisterScreen()  {

    //Variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [validMessage, setValidMessage] = useState("");
    const [error, setError] = useState("");
    const [nextInput, setNextInput] = useState("");
    const [prevInput, setPrevInput] = useState("true");
    const userUID = "";
    const PhotoURL = "https://firebasestorage.googleapis.com/v0/b/hearttoart-a8546.appspot.com/o/userImages%2Fdefault-icon.png?alt=media&token=7e7d8ed0-6733-454c-b386-40dfc0a32370";
    const Username = "";

    const [accTypeOpen, setAccTypeOpen] = useState(false);
    const [accTypeValue, setAccTypeValue] = useState(null);
    const [accType, setAccType] = useState([
        {label: 'Artist', value: 'artist'},
        {label: 'Client', value: 'client'},
    ]);

    const [accountType, setAccountType] = useState(null);
    
    const [buttonEnabled, setButtonEnabled] = useState(false);
    
    //Navigation
    const navigation = useNavigation();

    const showNext = () => {
        setNextInput(true);
        setPrevInput(false);
    };

    const showPrev = () => {
        setNextInput(false);
        setPrevInput(true);
    };

    const backButton = () => {
        setNextInput(false);
        setPrevInput(true);
        navigation.replace('Home');
    };

    let validateAndSet = (value, valueToCompare, setValue) => {
        if (value !== valueToCompare) {
            setValidMessage("Passwords do not match");
            setButtonEnabled(false);
        } else {
            setValidMessage("");
            setButtonEnabled(true);
        }

        setValue(value);
    };

    //Write New User Data
    // let addToDatabase = () => {
    //     const newUser = collection(db, "users");
    //     setDoc(newUser, { FirstName, LastName, email, password, confirmPassword })
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         })
    // };

    let handleSignUp = () => {
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const ref = doc(db, "users", auth.currentUser.uid);
                const docRef = await setDoc(ref, { 
                    FirstName,
                    LastName,
                    Username,
                    email,
                    password,
                    confirmPassword,
                    userUID,
                    PhotoURL,
                    accountType
                })
                sendEmailVerification(auth.currentUser);
                navigation.replace("Login");
                
            })
            .catch((error) => {
                // Handle Errors here.
                setValidMessage(error.message);
            });
        }
    };

    let combinedData = () => {
        handleSignUp();
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
            
            { prevInput && ( // Back to Login 
            
            <TouchableOpacity 
                style = {styles.backButtonContainer} 
                onPress={backButton}>
                <Ionicons 
                name="arrow-back-sharp" 
                size={27} 
                color="#ffffff"
            />  
            </TouchableOpacity>
            )}
            
            { nextInput && ( // Back to Previous Inputs 
            
            <TouchableOpacity 
                style = {styles.backButtonContainer} 
                onPress={showPrev}>
                <Ionicons 
                name="arrow-back-sharp" 
                size={27} 
                color="#ffffff"
            />  
            </TouchableOpacity>
            )}

            {/* Heading Text and Logo */}
            <View style = {styles.headingContainer}>
                <Image source={logopic} style={styles.loginLogoImage}/>
                <Text style = {styles.heading}>Welcome to Heart to Art.</Text>
            </View> 
            
            {/* Inside White Container*/}
            <View style =  {styles.componentContainer}>
                <Text style = {styles.title}>Sign Up</Text>
                <Text style={[styles.errorText]}>{validMessage}</Text>
                
            {prevInput && (
                <View>
                {/* Email Label */}
                <TextInput
                placeholder ="Enter Email"
                keyboardType='email-address'
                textContentType='emailAddress'
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
                onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)}
                />

                {/* Confirm Password Label */}
                <TextInput
                placeholder = "Confirm Password"
                value = {confirmPassword}
                style = {styles.inputSignUp}
                secureTextEntry = {true}
                onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)}
                />

                { buttonEnabled && ( // Next Button
                <TouchableOpacity 
                style={styles.button}
                onPress={showNext}
                >
                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
                )}

                </View>
            )}

            {nextInput && (
                <View>
                {/* First Name Label */}
                <TextInput
                placeholder ="Enter First Name"
                value = {FirstName}
                style = {styles.inputSignUp}
                onChangeText = {text => setFirstName(text)}
                />

                {/* Last Name Label */}
                <TextInput
                placeholder = "Enter Last Name"
                value = {LastName}
                style = {styles.inputSignUp}
                onChangeText = {text => setLastName(text)} 
                />

                <DropDownPicker 
                    placeholder= 'Select Account Type'
                    open={accTypeOpen}
                    value={accTypeValue}
                    items={accType}
                    setOpen={setAccTypeOpen}
                    setValue={setAccTypeValue}
                    setItems={setAccType}
                    onSelectItem={(item) => setAccountType(item.value)}
                    listMode="SCROLLVIEW"
                    textStyle={styles.dropdownText}
                    selectedItemContainerStyle={styles.dropdownSelected}
                    containerStyle={styles.dropdownCont}
                />
                
                {/* Sign Up Button*/}
                <TouchableOpacity
                style={styles.button}
                onPress={combinedData}
                >
                <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                </View>
            )}

            </View> 
            </KeyboardAvoidingView>
        </View>
    );
};