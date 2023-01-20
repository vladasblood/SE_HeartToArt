import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { useLinkProps, useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {

  //Initializations  
  const app = initializeApp(firebaseConfig);
  const navigation = useNavigation();
  const auth = getAuth(app);

  //Sign Out
  const handleSignOut = () => {
    auth.signOut()
    .then(() => {   
        navigation.replace("Login")    
    })
    .catch(error => alert(error.message))
  }  

  const handleFeed = () => {
    navigation.replace("Feed");
  }

  return (
    <View style = {styles.container}>

      <Text>Email: {auth.currentUser?.email}</Text>

      <TouchableOpacity 
        style = {styles.button} 
        onPress = {handleFeed}
        >
        <Text style={styles.buttonOutlineText}>Feed</Text>  
      </TouchableOpacity>

      <TouchableOpacity
      onPress = {handleSignOut}
      style = {styles.button}
      > 
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItem: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})