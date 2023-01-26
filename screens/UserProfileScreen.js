import { Button, Text, View, SafeAreaView, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../styles/userProfileStyle.js';
import { auth, db } from '../firebase';
import { collection, getDocs, getDoc, updateDoc, query, setDoc, where, doc, waitForPendingWrites } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { sendEmailVerification } from 'firebase/auth';
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import InlineTextButton from '../styles/InlineTextButton.js';

export default function UserProfileScreen({ navigation }) {

    const [oldUser, setOldUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [image, setImage] = useState(false);
    const profilePhoto = null;


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
    

    // GETTING IMAGE FROM FIREBASE STORAGE
    const storage = getStorage();
    const storageRef = ref(storage, `userImages/${user_id}_DP`);
    getDownloadURL(storageRef)
        .then((url) => {
        setImage(url); 
        })
        .catch((e) => console.log('downloadURL of image error => ', e));
    // GETTING IMAGE FROM FIREBASE STORAGE
    

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
                    PhotoURL: doc.data().PhotoURL,
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

    const manageAccount = () => {
        navigation.navigate('ManageAccount');
    }

    return (
        <SafeAreaView style={[styles.box]}>
            <View style = {styles.uppermostBar}> 
              
            </View>
            <ScrollView>
                <View style={styles.userContainer}>
                    <View style={styles.userLeftContainer}>
                        <Image 
                            style={styles.profilePhotoStyle}
                            source = {{uri : image}} />
                    </View>
                    <View style={styles.userRightContainer}>
                        <View style={styles.rightTopContainer}>
                            <View style={styles.nameAndStyleContainer}>
                                <Text style={styles.usernameText}>
                                    Username
                                </Text>
                                <View style = {styles.artStyle}>
                                    <Text style = {styles.artStyleText}>
                                        Art Style
                                    </Text>
                                </View>
                                {/*
                                    <Text style={styles.input}>
                                        Email: {oldUser.map(old => (<Text key={old.id}>{old.email}</Text>))}
                                    </Text>
                                    <Text style={styles.input}>
                                        Full Name: {oldUser.map(old => (<Text key={old.id}>{old.FirstName + old.LastName}</Text>))}
                                    </Text>
                                */}
                            </View>
                            <View style={styles.manageContainer}>
                                <TouchableOpacity style={styles.manageAcc} onPress={manageAccount}>
                                    <Text style={styles.manageText}>
                                        Manage Account
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.bioText}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.pricingsOuter}>
                    <View style={styles.pricingsContainer}>
                        <View style={styles.pricingsLeftContainer}>
                            <Image 
                                style = {styles.pricingsPhoto} 
                                source = {require('../assets/default-icon.png')}    
                                />
                        </View>
                        <View style={styles.pricingsRightContainer}>
                            <Text style={styles.pricings}>
                                Pricings
                            </Text>
                            <Text style={styles.pricingsDesc}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </Text>
                        </View>
                        {/* 
                            {auth.currentUser.emailVerified ? showContent() : showSendVerificationEmail()}
                        */}

                    </View>
                    <View style={styles.pricingsContainer}>
                        <View style={styles.pricingsLeftContainer}>
                            <Image 
                                style = {styles.pricingsPhoto} 
                                source = {require('../assets/default-icon.png')}    
                                />
                        </View>
                        <View style={styles.pricingsRightContainer}>
                            <Text style={styles.pricings}>
                                Pricings
                            </Text>
                            <Text style={styles.pricingsDesc}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </Text>
                        </View>

                    </View>
                    <View style={styles.pricingsContainer}>
                        <View style={styles.pricingsLeftContainer}>
                            <Image 
                                style = {styles.pricingsPhoto} 
                                source = {require('../assets/default-icon.png')}    
                                />
                        </View>
                        <View style={styles.pricingsRightContainer}>
                            <Text style={styles.pricings}>
                                Pricings
                            </Text>
                            <Text style={styles.pricingsDesc}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </Text>
                        </View>

                    </View>
                </View>
                <View style={styles.downBar}>
                        
                </View>
                
                <Button title="Logout" onPress={logOut}></Button>
            </ScrollView>
        </SafeAreaView>
    )
}