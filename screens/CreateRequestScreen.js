import { 
  Text, 
  View, 
  Image, 
  Button, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  TextInput,
  Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';

import { styles } from '../styles/createRequestStyle.js';
import { auth, db } from '../firebase.js';
import { doc, setDoc, collection, query, getDocs, where } from 'firebase/firestore';


const Stack = createNativeStackNavigator();

const CreateRequestScreen = () => {
  const navigation = useNavigation();

  const [artOpen, setArtOpen] = useState(false);
  const [artValue, setArtValue] = useState("");
  const [arts, setArts] = useState([
      {label: 'Logo', value: 'Logo'},
      {label: 'Poster', value: 'Poster'},
      {label: 'Portrait', value: 'Portrait'},
      {label: 'Landscape', value: 'Landscape'},
  ]);

  const [desc, setDesc] = useState("");

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const currString = date.toLocaleDateString();

  const [userName, setUserName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [uID, setUID] = useState("");

  const [reqNumber, setReqNumber] = useState(0)

  const reqStatus = "unclaimed";
  
  const confirmRequest = () => {
    setReqNumber(reqNumber+1);
    handleNewRequest();
    backToHome();
  }

  useEffect(() => {
    readData();
}, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const backToHome = () => {
    navigation.navigate('ClientHome');
  }

  const readData = async() => {
    const docRef = query(collection(db, 'users'), where("email", "==", auth.currentUser.email));

    getDocs(docRef)
    .then(snapshot => {
        snapshot.forEach(xdc => {
            var data = xdc.data();
            setUserName(data.Username);
            setPhotoURL(data.PhotoURL);
            setUID(data.userUID);
        })
    }) 
    .catch((e) =>
        console.log("cannot make new request")
    )
  }

  const handleNewRequest = async () => {

    const ref = doc(db, 'requests', auth.currentUser.uid);
        const docRef = await setDoc(ref, {
            userName,
            uID,
            date,
            photoURL,
            desc,
            artValue,
            reqStatus,
        })
  }


  return (
      <SafeAreaView style={[styles.box]}>
          <View style = {styles.uppermostBar}> 
              
          </View>

          <View style = {styles.upBar}> 

              <TouchableOpacity 
                  style={styles.backButton}
                  onPress={backToHome}>

                  <MaterialCommunityIcons 
                      name='arrow-left' 
                      color='white' 
                      size={30} 
                  />
                  
              </TouchableOpacity>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Create New Request</Text>
              </View>
          </View>
          
          <ScrollView>
              <View style={styles.container}>
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
                  <Text style = {styles.smallTitle}>Description</Text>
                  <View>
                    <TextInput
                              multiline={true}
                              numberOfLines={10}
                              style={styles.descStyle}
                              keyboardType="visible-password"
                              onChangeText={setDesc}
                              value={desc}
                              placeholder="" />
                  </View>
                  <Text style = {styles.smallTitle}>Target Date</Text>
                  <TouchableOpacity
                      style={styles.dateContainer}
                      onPress={showDatepicker}>
                        <Text
                          style={styles.dateText}>
                            {currString}
                        </Text>
                    </TouchableOpacity>
                    {show && (
                      <DateTimePicker
                        testID="datePicker"
                        value={date}
                        mode='date'
                        onChange={onChange}
                        minimumDate={new Date()}
                      />
                    )}
                
              </View>

              <View>
                  <View style = {styles.acceptContainer}>
                    <Text style = {styles.acceptText}>
                        Are you sure you want to create this request?
                    </Text>
                    <TouchableOpacity style = {styles.requestButton} onPress = {confirmRequest}>
                      <Text style = {styles.requestButtonText}>Confirm</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              
          
              <View style={styles.downBar}>
                       
              </View>
              
          </ScrollView>

      </SafeAreaView>
  )
}

export default CreateRequestScreen;