import { 
    Button, 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView, 
    Image, 
    TouchableOpacity, 
    TextInput,
    ImageBackground,
    Alert,
    ActivityIndicator,
    FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../styles/manageAccountStyle.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { doc, updateDoc, setDoc, query, collection, getDocs, where } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, getFirestore} from "firebase/storage"
import { auth, db } from '../firebase';
import DropDownPicker from 'react-native-dropdown-picker';


const ManageAccountScreen = () => {
    
    const [textBIO, setTextBIO] = useState("");
    const [userName, setUserName] = useState("");

    const navigation = useNavigation();

    const [image, setImage] = useState(null);
    const [updatedImage, setUpdatedImage] = useState(false);

    const [uploading, setUploading] = useState(false);

    const user_id = auth.currentUser?.uid;

    //Artist
    const [artOpen, setArtOpen] = useState(false);
    const [artValue, setArtValue] = useState(null);
    const [arts, setArts] = useState([
        {label: 'Logo', value: 'Logo'},
        {label: 'Poster', value: 'Poster'},
        {label: 'Portrait', value: 'Portrait'},
        {label: 'Landscape', value: 'Landscape'},
    ]);

    const [userType, setUserType] = useState("");

    //user
    const [readUser, setReadUser] = useState([]);

    //Get Data
    useEffect(() => {
        getData();
    })

    const backToAccount = () => {
        navigation.navigate('Profile');
    }

    //Get User Data
    const getData = async () => {
        const docRef = query(collection(db, 'users'), where("email", "==", auth.currentUser.email));

        getDocs(docRef)
        .then(snapshot => {
            snapshot.forEach(xdc => {
                var data = xdc.data();
                setUserType(data.accountType); // store userType
            })
        })
    }

    
    //Profile Picture
    const changeProfilePicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, 
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        })
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            // uploadImage(result.assets[0].uri);
        }
    }

    //Upload Image
    const uploadImage = async () => {
        const storage = getStorage();
        const storageRef = ref(storage, `userImages/${user_id}_DP`);

        const img = await fetch(image);
        const bytes = await img.blob();

        await uploadBytes(storageRef, bytes);
        readImage();
        setUploading(true);
    }

    //Read Image Data
    const readImage = () => {
        const storage = getStorage();
        const storageRef = ref(storage, `userImages/${user_id}_DP`);
        getDownloadURL(storageRef)
            .then((url) => {
                return setUpdatedImage(url);
            })
            .catch((e) => console.log('downloadURL of image error => ', e));
    }

    //Update User Data
    const newPhoto = async () => {
        try {
            const bigData = doc(db, "users", auth.currentUser.uid);
            await updateDoc(bigData, {
                PhotoURL: updatedImage,
                Username: userName,
                userUID: user_id,
            })
        } catch (e) {}
        setUploading(false);
    }

    const changeBIO = async () => {
        const ref = doc(db, 'users', auth.currentUser.uid, 'bio', auth.currentUser.uid);
        const docRef = await setDoc(ref, {
            textBIO,
            artValue,
        })
    }

    const saveAllChanges = () => {
        //Upload First to Firebase Storage
        uploadImage();
        newPhoto();
        changeBIO();
        console.log('Uploaded Images');   
        setUploading(false); 
    }

    //Show Artist == Artist
    function ShowArtist() {
        if (userType == 'artist') {
            return (
                <View>
                <Text style = {styles.smallTitle}>Template</Text>
                <DropDownPicker 
                    open={artOpen}
                    value={artValue}
                    items={arts}
                    setOpen={setArtOpen}
                    setValue={setArtValue}
                    setItems={setArts}
                    listMode="SCROLLVIEW"
                    textStyle={styles.dropdownText}
                    containerStyle={styles.dropdownContainer}
                />
                </View>
            )
        }
        return null;
    }

    return (
        <SafeAreaView style={[styles.box]}>

            <View style = {styles.uppermostBar}> 
                
            </View>

            <View style = {styles.upBar}> 

                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={backToAccount}>

                    <MaterialCommunityIcons 
                        name='arrow-left' 
                        color='white' 
                        size={30} 
                    />
                    
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style = {styles.title}>
                        Manage Account
                    </Text>
                </View>

            </View>
            
            <ScrollView>
                <View style={styles.saveContainer}>

                    <TouchableOpacity onPress={changeProfilePicture}>

                        <ImageBackground 
                            style = {styles.profilePhoto} 
                            imageStyle = {styles.imageOpacity}
                            source={{ uri : image }}
                        >
                            <MaterialCommunityIcons 
                                style={styles.iconContainer}
                                name='camera-plus-outline'
                                color='black'
                                size={30}
                            />
                        
                        </ImageBackground>
                    
                    </TouchableOpacity>
                    
                    
                </View>

                <View style={styles.container}>
                    <Text style={styles.smallTitle}>Username</Text>
                        <View>
                            <TextInput
                                style={styles.input}
                                keyboardType="visible-password"
                                onChangeText={setUserName}
                                value={userName}
                                />
                        </View>
                </View>
                <View style={styles.container}>
                    <Text style = {styles.smallTitle}>Bio</Text>
                    <View>
                        <TextInput
                            style={styles.input}
                            keyboardType="visible-password"
                            onChangeText={setTextBIO}
                            value={textBIO}
                             />
                    </View>

                    {/* for Artists */}
                    <ShowArtist/> 
                    
                </View>

                <View style={styles.saveContainer}>
                    {/* Wala munang indicator, trying to figure out where to put boolean */}

                    {/* { ! uploading ? < ActivityIndicator size="large" color = "#000" /> : */}
                        <View>
                            <TouchableOpacity 
                                style={styles.saveChangesStyle}
                                onPress={saveAllChanges}>
                                <Text style={styles.saveTextStyle}>
                                    SAVE CHANGES
                                </Text>
                            </TouchableOpacity>
                        </View>
                     
                    {/* } */}
                </View>
            
                <View style={styles.downBar}>
                    
                </View>
                
            </ScrollView>

        </SafeAreaView>
    )
}

export default ManageAccountScreen;