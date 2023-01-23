import { Button, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles/styles.js';
import { auth, db } from '../firebase';
import { collection, getDocs, getDoc, updateDoc, query, setDoc, where, doc, waitForPendingWrites } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { sendEmailVerification } from 'firebase/auth';
import InlineTextButton from '../styles/InlineTextButton.js';

export default function UserProfileScreen({ navigation }) {

    const [oldUser, setOldUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    //LOG-OUT
    const logOut = () => {
        signOut(auth).then(() => {
            navigation.replace("Home");
        });
    };

    //useEffect
    useEffect(() => {
        updateUID();
        readData();
    }, []);

    // useEffect(() => {
    //     console.log(oldUser);
    // }, [oldUser]);

    //Loading Data
    let user_id = auth.currentUser?.uid;
    console.log("Your user id is: ", user_id);

    
    // let readData = () => {
    //     const editProfile = (collection(db, 'users'));
    //     getDocs(editProfile)
    //         .then(response => {
    //             const das = response.docs.map(doc => ({
    //                 email: doc.data().email,
    //                 id: doc.id
    //             }))
    //             setOldUser(das);
    //             console.log(doc.id);
    //             console.log(auth.currentUser.uid);
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         })
    // };
    let updateUID = () => {
        const userUID = auth.currentUser.uid;
        const bigData = doc(db, "users", auth.currentUser.uid);
        updateDoc(bigData, {
            userUID: userUID,
        })
    };

    let readData = () => {
        const editProfile = query(collection(db, 'users'), where("email", "==", auth.currentUser.email));
        getDocs(editProfile)
            .then(response => {
                const das = response.docs.map(doc => ({
                    email: doc.data().email,
                    FirstName: doc.data().FirstName,
                    LastName: doc.data().LastName,
                    //Missing: -> Profile Picture
                    id: doc.id
                }))
                setOldUser(das);
                console.log(doc.id);
                console.log(auth.currentUser.uid);
            })
            .catch(error => {
                console.log(error.message)
            })
    };

    //Read Profile User Data
    // let readData = () => {
    //     const editProfile = (collection(db, 'users'));
    //     getDocs(editProfile)
    //         .then(response => {
    //             const das = response.docs.map(doc => ({
    //                 email: doc.data().email,
    //                 id: doc.id
    //             }))
    //             setOldUser(das);
    //             console.log(doc.id);
    //             console.log(auth.currentUser.uid);
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         })
    // };

    //Edit Profile User Data

    //MAIN CONTENT
    // let loadUserContent = async () => {

    //     setIsLoading(false);
    // }

    // let showUserContent = () => {

    // };
    const showContent = () => {
        return (
            <View style={styles.container}>
                <Text>Welcome</Text>
                {/* {isLoading ? <ActivityIndicator size = "large"/> : showUserContent()} */}
            </View>
        );
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
        <SafeAreaView style={[styles.container]}>
            <View style={styles.rowContainer}>
                <InlineTextButton text="Manage Account"
                    color="#258ea6" />
            </View>
            <Text style={styles.input}>
                Email: {oldUser.map(old => (<Text key={old.id}>{old.email}</Text>))}
            </Text>

            <Text style={styles.input}>
                Full Name: {oldUser.map(old => (<Text key={old.id}>{old.FirstName + old.LastName}</Text>))}
            </Text>

            <Text style={styles.input}>Your User Profile</Text>
            {auth.currentUser.emailVerified ? showContent() : showSendVerificationEmail()}
            <Button title="Logout" onPress={logOut}></Button>
        </SafeAreaView>
    )
}