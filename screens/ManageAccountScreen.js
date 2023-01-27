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
import { doc, updateDoc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { auth, db } from '../firebase';
import DropDownPicker from 'react-native-dropdown-picker';

const ManageAccountScreen = () => {
    const [bio, onChangeBio] = React.useState('');
    const [price, onChangePrice] = React.useState('');
    const [priceDesc, onChangePriceDesc] = React.useState('');
    const [price2, onChangePrice2] = React.useState('');
    const [priceDesc2, onChangePriceDesc2] = React.useState('');
    const [price3, onChangePrice3] = React.useState('');
    const [priceDesc3, onChangePriceDesc3] = React.useState('');

    const [textBIO, setTextBIO] = useState("");
    const [userName, setUserName] = useState("");

    const navigation = useNavigation();

    const [image, setImage] = useState(null);
    const [updatedImage, setUpdatedImage] = useState(false);

    const [uploading, setUploading] = useState(false);

    const user_id = auth.currentUser?.uid;

    const [artOpen, setArtOpen] = useState(false);
    const [artValue, setArtValue] = useState(null);
    const [arts, setArts] = useState([
        {label: 'Logo', value: 'logo'},
        {label: 'Poster', value: 'poster'},
        {label: 'Portrait', value: 'portrait'},
        {label: 'Landscape', value: 'landscape'},
    ]);

    // useEffect(() => {
    //     newPhoto();
    // }, []);

    
  
    const backToAccount = () => {
      navigation.navigate('Profile');
    }

    

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

    const uploadImage = async () => {
        const storage = getStorage();
        const storageRef = ref(storage, `userImages/${user_id}_DP`);

        const img = await fetch(image);
        const bytes = await img.blob();

        //const docRef = (await db.collection('users').doc('userUID').get()).data().photoURL

        await uploadBytes(storageRef, bytes);
        await readImage();
        //await newPhoto();
    }

    const readImage = () => {
        //Read Image Data
        const storage = getStorage();
        const storageRef = ref(storage, `userImages/${user_id}_DP`);
        getDownloadURL(storageRef)
            .then((url) => {
                return setUpdatedImage(url);
            })
            .catch((e) => console.log('downloadURL of image error => ', e));
    }

    const newPhoto = async () => {
        const bigData = doc(db, "users", auth.currentUser.uid);
        await updateDoc(bigData, {
            PhotoURL: updatedImage,
            Username: userName,
        })
    }

    const changeBIO = async () => {
        const ref = doc(db, 'users', auth.currentUser.uid, 'bio', auth.currentUser.uid);
        const docRef = await setDoc(ref, {
            textBIO,
        })
    }

    const saveAllChanges = () => {
        //Upload First to Firebase Storage
        uploadImage();
        newPhoto();
        changeBIO();    
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
                <View style={styles.container}>

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
                                style={styles.inputUser}
                                keyboardType="visible-password"
                                onChangeText={setUserName}
                                value={userName}
                                placeholder="New Username..." />
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
                            placeholder="Type Here..." />
                    </View>
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
                    <Text style = {styles.smallTitle}>Pricings</Text>
                    <View style={styles.sideBySide}>
                        <Image 
                            style={styles.pricePhotos}
                            source={require('../assets/default-icon.png')} 
                        />

                        <View style={styles.pricings}>
                            <TextInput
                                style={styles.pricesInput}
                                keyboardType="numeric"
                                onChangeText={onChangePrice}
                                value={price}
                                placeholder="Php. 0000.00" />
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={styles.pricesDesc}
                                keyboardType="visible-password"
                                onChangeText={onChangePriceDesc}
                                value={priceDesc}
                                placeholder="Description" />
                        </View>
                    </View>
                    <View style={styles.sideBySide}>
                        <Image 
                            style={styles.pricePhotos}
                            source={require('../assets/default-icon.png')} 
                        />

                        <View style={styles.pricings}>
                            <TextInput
                                style={styles.pricesInput}
                                keyboardType="numeric"
                                onChangeText={onChangePrice2}
                                value={price2}
                                placeholder="Php. 0000.00" />
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={styles.pricesDesc}
                                keyboardType="visible-password"
                                onChangeText={onChangePriceDesc2}
                                value={priceDesc2}
                                placeholder="Description" />
                        </View>
                    </View>
                    <View style={styles.sideBySide}>
                        <Image 
                            style={styles.pricePhotos}
                            source={require('../assets/default-icon.png')} 
                        />

                        <View style={styles.pricings}>
                            <TextInput
                                style={styles.pricesInput}
                                keyboardType="numeric"
                                onChangeText={onChangePrice3}
                                value={price3}
                                placeholder="Php. 0000.00" />
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={styles.pricesDesc}
                                keyboardType="visible-password"
                                onChangeText={onChangePriceDesc3}
                                value={priceDesc3}
                                placeholder="Description" />
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    
                </View>

                <View>
                    <TouchableOpacity 
                        style={styles.saveChangesStyle}
                        onPress={saveAllChanges}>
                        <Text style={styles.saveTextStyle}>
                            SAVE CHANGES
                        </Text>
                    </TouchableOpacity>

                    

                </View>
            
                <View style={styles.downBar}>
                         
                </View>
                
            </ScrollView>

        </SafeAreaView>
    )
}

export default ManageAccountScreen;