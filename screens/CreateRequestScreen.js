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
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';

import { styles } from '../styles/createRequestStyle.js';

const Stack = createNativeStackNavigator();

const CreateRequestScreen = () => {
  const navigation = useNavigation();

  const [artOpen, setArtOpen] = useState(false);
  const [artValue, setArtValue] = useState(null);
  const [arts, setArts] = useState([
      {label: 'Logo', value: 'logo'},
      {label: 'Poster', value: 'poster'},
      {label: 'Portrait', value: 'portrait'},
      {label: 'Landscape', value: 'landscape'},
  ]);

  const [desc, setDesc] = useState(false);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const curr = new Date();
  const currString = curr.toLocaleDateString();
  
  const confirmRequest = () => {
    // handle 
    backToHome();
  }

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
                  <View style = {styles.acceptContainer} >
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