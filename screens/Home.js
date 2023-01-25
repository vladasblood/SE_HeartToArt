import React from 'react'
import { Image, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/Home-Styles'

import logopic from "../assets/Heart.png" 
const backImage = require("../assets/BlueBackground.jpg")

export default function Login({navigation}) {

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
        <KeyboardAvoidingView
          style = {styles.loginContainer} 
          behavior="height" 
          keyboardVerticalOffset={0}>
            
          {/* Heading Text and Logo */}
          <View style = {styles.headingContainer}>
          <Image source={logopic} style={styles.loginLogoImage}/>
          <Text style = {styles.title}>Pour your hearts into art, see a world full of creative minds.</Text>
          </View> 
          
          {/* Inside Blue Container */}
          <View style =  {styles.componentContainer}>
            <Text style = {styles.heading}>Join Heart to Art today.</Text>

            {/* Login Page Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace('Login')}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Sign Up Page Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.replace('Signup')}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
  )
}