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

    const [userBIO, setUserBIO] = useState([]);

    // const [isLoading, setIsLoading] = useState(true);
    // const [image, setImage] = useState(false);
    // const profilePhoto = null;

    //LOG-OUT
    const logOut = () => {
        signOut(auth).then(() => {
            navigation.replace("Home");
        });
    };

    //useEffect
    useEffect(() => {
        readData();
    }, []);

    // useEffect(() => {
    //     console.log(oldUser);
    // }, [oldUser]);

    //Loading Data
    let user_id = auth.currentUser?.uid;
    //console.log("Your user id is: ", user_id);

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


    let readData = () => {
        const editProfile = query(collection(db, 'users'), where("email", "==", auth.currentUser.email));
        getDocs(editProfile)
            .then(response => {
                const das = response.docs.map(doc => ({
                    email: doc.data().email,
                    FirstName: doc.data().FirstName,
                    LastName: doc.data().LastName,
                    PhotoURL: doc.data().PhotoURL,
                    Username: doc.data().Username,
                    id: doc.id
                }))
                setOldUser(das);
                //console.log(oldUser.map.id.data().PhotoURL);
                // console.log(doc.id);
                // console.log(auth.currentUser.uid);
                das.map((elem) => {
                    console.log("Elem id", elem.id);
                    const subCollect = query(collection(db, `users/${elem.id}/bio`))
                    getDocs(subCollect)
                    .then(response =>{
                        const bio = response.docs.map(doc => ({
                                textBIO: doc.data().textBIO,
                                id: doc.id
                        }))
                        setUserBIO(bio);
                    }
                    )
                })
                
            })
            .catch(error => {
                // console.log(error.message)
            })
        
        // const newBIO = collection(db, 'users', auth.currentUser.uid, 'bio', auth.currentUser.uid); 
        // getDocs(newBIO)
        // .then(response => {
        //     const das = response.docs.map(doc => ({
        //         textBIO: doc.data().textBIO,
        //         id: doc.id
        //     }))
        //     setUserBIO(das);
        // })
        // .catch(error => {
        // })
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
            <ScrollView onScroll={readData}>
                <View style={styles.userContainer}>
                    <View style={styles.userLeftContainer}>

                    {/* {oldUser.map(old => (<Text style = {styles.profilePhotoStyle} key = {old.id} source = {{uri: old.PhotoURL}}></Text>))} */}
                        {/* <Image 
                            style={styles.profilePhotoStyle}
                            source = {{uri : image}} /> */}
                    {/* {oldUser.map(old => (<Text key = {old.id}><Image style = {styles.profilePhotoStyle }source = {{uri: old.PhotoURL}}/></Text>))} */}
                    {oldUser.map(old => (
                        <Image
                        key = {old.id}
                        style = {styles.profilePhotoStyle}
                        source = {
                            {uri: old.PhotoURL}}
                        />
                        )
                        )
                    }
                    </View>
                    <View style={styles.userRightContainer}>
                        <View style={styles.rightTopContainer}>
                            <View style={styles.nameAndStyleContainer}>
                                <Text style={styles.usernameText}>
                                    {oldUser.map(old => (<Text key = {old.id}>{old.Username}</Text>))}
                                </Text>
                                <Text style={styles.emailText}>
                                    {oldUser.map(old => (<Text key = {old.id}>{old.email}</Text>))}
                                </Text>
                                <View style = {styles.artStyle}>
                                    <Text style = {styles.artStyleText}>
                                        Template
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
                                        Edit Account
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            {userBIO.map(bios => (<Text style = {styles.bioText} key = {bios.id}>{bios.textBIO}</Text>))}
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
                
                <TouchableOpacity onPress={logOut} style={styles.logOutStyle}>
                    <Text style={styles.logOutTextStyle}>
                        LOGOUT
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}