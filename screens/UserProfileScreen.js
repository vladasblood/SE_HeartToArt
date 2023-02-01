import { Button, Text, View, SafeAreaView, ActivityIndicator, Pressable, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { styles } from '../styles/userProfileStyle.js';
import { auth, db } from '../firebase';
import { collection, getDocs, getDoc, onSnapshot, deleteDoc, updateDoc, query, setDoc, where, doc, waitForPendingWrites } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { sendEmailVerification } from 'firebase/auth';
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import InlineTextButton from '../styles/InlineTextButton.js';

export default function UserProfileScreen({ navigation }) {

    const [oldUser, setOldUser] = useState([]);

    const [userBIO, setUserBIO] = useState([]);

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



    //Loading Data
    let user_id = auth.currentUser?.uid;
 
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
                    id: doc.id,
                    userType: doc.data().accountType,
                }))
                setOldUser(das);
    
                das.map((elem) => {
                    console.log("Elem id", elem.id);
                    const subCollect = query(collection(db, `users/${elem.id}/bio`))
                    getDocs(subCollect)
                    .then(response =>{
                        const bio = response.docs.map(doc => ({
                                textBIO: doc.data().textBIO,
                                artValue: doc.data().artValue,
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
    };


    const manageAccount = () => {
        navigation.navigate('ManageAccount');
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        
        const getClaim = query(collection(db, 'requests'), where("reqStatus", "==", 'claimed'));
        // const ref = collection(db, "requests");

        onSnapshot(getClaim, (categories) =>
            setData(categories.docs.map((category) => ({
                data: category.data()
            }))
            )
        )
    })

    return (

       
        <SafeAreaView style={[styles.box]}>
            
                <View style = {styles.uppermostBar}> 
                
                </View>


                <ScrollView onScroll = {readData}>

                    <View style={styles.userContainer}>
                        <View style={styles.userLeftContainer}>

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
                                            {userBIO.map(bios => (<Text style = {styles.bioText} key = {bios.id}>{bios.artValue}</Text>))}
                                            </Text>
                                        </View>
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
                    

                    {data.map((item, index) => (
                        <View style={styles.pricingsOuter} key={index}>
                            <View style={styles.pricingsContainer}>

                                {/* IMAGE CONTAINER */}
                                <View style={styles.pricingsLeftContainer}>
                                    <Image
                                        style={styles.pricingsPhoto}

                                        source={{uri: item.data.photoURL}}
                                    />
                                </View>

                                {/* USER, ARTVALUE, DESCRIPTION */}
                                <View style={styles.pricingsRightContainer}>
                                
                                    <Text style = {styles.pricings}>
                                        {item.data.userName}
                                    </Text>

                                    <Text style={styles.pricingsDesc}>
                                        {item.data.artValue}
                                    </Text>

                                    <Text style={styles.pricingsDesc}>
                                        {item.data.desc}
                                    </Text>
                                </View>

                            </View>
                        </View>
                    ))}
                    
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