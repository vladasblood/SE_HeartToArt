import { Alert, ImageBackground, Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewComponent } from 'react-native'
import React, { useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import logopic from "../assets/Heart.png" 
import darklogopic from "../assets/DarkHeart.png" 


const LoginSignupScreen = () => {

		//Initializations
		const navigation = useNavigation();

		//Go to Login or Signup
		const handleLogin = () => {
				navigation.replace("Login")
		}

		const handleSignup = () => {
				navigation.replace("Signup")
		}

		return (
			<KeyboardAvoidingView
					style = {styles.container}
					behavior = "padding"
			>
				{/* Heading Text and Logo */}
				<View style = {styles.headingContainer}>
			

					<Image source={logopic} 
						style={styles.LogoImage}
					/>

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
					
					<Text style = {styles.buttonText}>Log in</Text>

					</TouchableOpacity>

				</View>

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

const styles = StyleSheet.create ({

	container: {
		flex: 1,
		// justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '40%',
		backgroundColor: '#eff0f1'
	},
	buttonContainer: {
		width: '100%',
		paddingBottom: '5%',
		paddingTop: '5%',
		backgroundColor: 'white'
	},
	button: {
        backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#2a4267',
        width: '90%',
		height: 40,
        paddingTop: '1.5%',
		margin: '2.5%',
		borderRadius: 40,
		alignSelf: 'center'
    },
    buttonOutline: {
        backgroundColor: '#2a4267',
        borderWidth: 2,
		paddingTop: '1.5%',
    },
    buttonText: {
        color: '#2a4267',
        fontWeight: '700',
        fontSize: 16,
		alignSelf: 'center',
		margin: 0,
    },
    buttonOutlineText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
		alignSelf: 'center',
		margin: 0,
    },
	blueContainer: {
		backgroundColor: '#2a4267',
		width: '100%',
		height: '30%',
		justifyContent: 'space-around',
		padding: '4%',
		paddingLeft: '5%',
	},
	subheading: {
		color: '#242424',
		textAlign: 'left',
		textAlign: 'left',
		paddingLeft: '5%',
		fontWeight: '700',
		marginBottom: '1%',
	},
	heading: {
		color: '#242424',
		textAlign: 'left',
		fontWeight: '800',
		fontSize: 17,
		paddingRight: '20%',
	},
	LogoImage: {
		maxWidth: '8%',
		maxHeight: '18%',
		marginBottom: '6%',
	},
	blueContainerTexts: {
		color: 'white',
		textAlign: 'left',
		fontWeight: '700',
		fontSize: 17,
	},
	blueContainerBackground: {
		maxWidth: '30%',
		maxHeight: '30%',
		marginBottom: '104%',
		position: 'absolute',
		marginLeft: '45%',
		marginTop: '0%',
	}

})

