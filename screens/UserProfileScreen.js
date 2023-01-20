import { Button, Text, View, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles/styles.js';
import { auth, db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { sendEmailVerification } from 'firebase/auth';
import InlineTextButton from '../styles/InlineTextButton.js';

export default function UserProfileScreen({navigation, route}){

    const [oldUser, setOldUser] = useState([]);

    //LOG-OUT
    const logOut = () => {
        signOut(auth).then(() => {
            navigation.replace("Home");
        });
    };

    //useEffect
    useEffect(() => {
        readData()
    }, []);

    useEffect(() => {
        console.log(oldUser);
    }, [oldUser]);

    //Read Profile User Data
    let readData = () => {
        const editProfile = collection(db, 'users');
        getDocs(editProfile)
        .then(response => {
            const das = response.docs.map(doc =>({
                data: doc.data(),
                 id: doc.id,
            }))
            setOldUser(das);
        })
        .catch(error => {
            console.log(error.message)
        })

    };
    //Edit Profile User Data

    //MAIN CONTENT
    const showContent = () => {
        return <View style = {styles.container}></View>
    };

    //VERIFY EMAIL BEFORE MAIN CONTENT
    const showSendVerificationEmail = () => {
        return (
            <View>
                <Text>Please verify your email to use the app</Text>
                <Button title="Send Verification Email" 
                        onPress={() => sendEmailVerification(auth.currentUser)} />
            </View>  
        )
    };

    return (
        <SafeAreaView style = {[styles.container]}>
           <View style = {styles.rowContainer}>
                <InlineTextButton text = "Manage Account"
                    color = "#258ea6"/>
           </View>
           <Text style = {styles.input}>
                First Name: {oldUser.map(old => (<Text key = {old.uid}>{old.data.FirstName}</Text>))}
            </Text>
           <Text style = {styles.input}>Your User Profile</Text>
           {auth.currentUser.emailVerified ? showContent() : showSendVerificationEmail()}
           <Button title = "Logout" onPress = {logOut}></Button>
        </SafeAreaView>
    )
}
