import { Image, KeyboardAvoidingView, Text, TouchableOpacity, View,} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import logopic from "../assets/Heart.png" 
import darklogopic from "../assets/DarkHeart.png" 
import styles from '../styles/Home-Styles.js'



const LoginSignupScreen = () => {

		//Initializations
		const navigation = useNavigation();

		//Go to Login or Signup
		const handleLogin = () => {
				navigation.navigate("Login")
		}

		const handleSignup = () => {
				navigation.navigate("Signup")
		}

		return (
			<KeyboardAvoidingView
					style = {styles.container}
					behavior = "padding"
			>
				{/* Heading Text and Logo */}
				<View style = {styles.headingContainer}>
					<Image source={logopic} style={styles.LogoImage}/>
					<Text style = {styles.heading}>Pour your hearts into art and see a world full of creative minds</Text>
				</View> 


				{/* Buttons and Subheading */}
				<View style = {styles.buttonContainer}>

					{/* Subheading */}
					<View> 
						<Text style = {styles.subheading}>Join Heart to Art today.</Text>
					</View>

					{/*Sign up Button*/}
					<TouchableOpacity 
					style = {[styles.button, styles.buttonOutline]}
					onPress = {handleSignup}
					>
					
					<Text style = {styles.buttonOutlineText}>Sign Up</Text>  
					</TouchableOpacity>

					{/*Log in Button*/}
					<TouchableOpacity 
					style = {styles.button}
					onPress = {handleLogin}
					>

					{/* <Button title = "login" 
						style={styles.button}
							onPress={()=>navigation.navigate('Register')}/>
					 */}
					<Text style = {styles.buttonText}>Log in</Text>

					</TouchableOpacity>

				</View>

				{/* Slogan-like Footer */}
				<View style = {styles.blueContainer}>

					<Text style = {styles.blueContainerTexts}>Request an Art</Text>
					<Text style = {styles.blueContainerTexts}>Socialize and Communicate</Text>
					<Text style = {styles.blueContainerTexts}>Promote Creativity</Text>

					<Image source={darklogopic} 
						style={styles.blueContainerBackground}
					/>


				</View>
			</KeyboardAvoidingView>
		)
}

export default LoginSignupScreen