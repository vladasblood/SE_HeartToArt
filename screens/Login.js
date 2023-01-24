import { Image, Alert, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import logopic from "../assets/Heart.png" 
import styles from '../styles/Login+Signup-Styles.js'
import { Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const LoginScreen = () => {
	const [email, setEmail] = useState('')    
	const [password, setPassword] = useState('')  

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	const navigation = useNavigation();
	
	//To Remove Back-option
	useEffect(()=>{
		const unsub = auth.onAuthStateChanged(user => {
		if (user) {
				navigation.replace('Chat')
		}
		})
			return unsub
	}, [])

	//Create New User Account
	const handleSignUp  = () => {
		createUserWithEmailAndPassword(auth, email, password)
		.then(userCredentials => {
				const user = userCredentials.user;
				console.log(user);
		})
		.catch(error => {
				console.log(error)
				Alert.alert(error.message);
		})
	}
	
	//Log In Existing User Account
	const handleLogin = () => {
		signInWithEmailAndPassword(auth, email, password)
		.then(userCredentials => {
				console.log('Login successful');
				const user = userCredentials.user;
		})
		.catch(error => {
				console.log(error)
		})
		
	}
  
	return (
		<KeyboardAvoidingView
			style = {styles.loginContainer} behavior="height" keyboardVerticalOffset={0}>
      
      <TouchableOpacity style = {styles.backButtonContainer} onPress = {navigation.goBack}>
        <Ionicons 
          name="arrow-back-sharp" 
          size={27} 
          color="#2a4267"
        />  
      </TouchableOpacity>

			{/* Heading Text and Logo */}
			<View style = {styles.loginHeadingContainer}>
				<Image source={logopic} style={styles.loginLogoImage}/>
				<Text style = {styles.heading}>Pour your hearts into art and see a world full of creative minds</Text>
			</View> 
			
			{/* Inside Blue Container */}
			<View style =  {styles.loginComponentContainer}>

				<Text style = {styles.loginText}>Login</Text>

				{/* Username Label */}
				<Text style = {styles.labels}>Username</Text>
				
				<TextInput
					placeholder ="Enter Username"
					value = {email}
					onChangeText = {text => setEmail(text)}
					style = {styles.input}
				/>

				{/* Password Label */}
				<Text style = {styles.labels}>Password</Text> 

				<TextInput
					placeholder = "Enter Password"
					value = {password}
					onChangeText = {text => setPassword(text)} 
					style = {styles.input}
					secureTextEntry
				/>

				{/* Forgot Password? */}
				<Text style = {styles.forgotPassText}>Forgot Password?</Text> 

        {/* LOGIN */}
        <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
        >
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

			</View>

		</KeyboardAvoidingView>
	)
}

export default LoginScreen