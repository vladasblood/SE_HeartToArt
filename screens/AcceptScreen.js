import { 
  Text, 
  View, 
  Image, 
  Button, 
  TouchableOpacity, 
  ScrollView, 
  Modal } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../styles/acceptStyle.js';

const Stack = createNativeStackNavigator();

const AcceptScreen = () => {
  const navigation = useNavigation();
  
  const date = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const dateString = `, ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  const targetDate = days[date.getDay()];
  
  const confirmAccept = () => {
    backToFeed();
    // handle
    
  }

  const cancelAccept = () => {
    backToFeed();
    // handle
    
  }

  const backToFeed = () => {
    navigation.goBack();
  }

  return (
    <View style = {styles.box}>
      <View style = {styles.uppermostBar}> 

      </View>

      <View style = {styles.upBar}> 
        <TouchableOpacity onPress={backToFeed}>
          <MaterialCommunityIcons 
            name='arrow-left' 
            color='white' 
            size={30} 
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style = {styles.requestContainer}>
            <View style = {styles.photoContainer}>
              <Image style = {styles.profilePhoto} 
                source = {require('../assets/default-icon.png')}
                />
            </View>

            <View style = {styles.requests}>
              <Text style = {styles.clientName}>Username</Text>

              <View style = {styles.artStyle}>
                <Text style = {styles.artStyleText}>Art Style</Text>
              </View>

              <Text style = {styles.reqDesc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>

              <View style = {styles.dateContainer}>
                <Text style = {styles.targ}>Target Date: </Text>
                <Text style = {styles.dateStyle}>{targetDate}{dateString}</Text>
              </View>
            </View>
        </View>

        <View>
          <View style = {styles.acceptContainer} >
            <Text style = {styles.acceptText}>
              Are you sure you want to accept this request?
            </Text>
            <TouchableOpacity style = {styles.requestButton} onPress = {confirmAccept}>
              <Text style = {styles.requestButtonText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.requestButton} onPress = {cancelAccept}>
              <Text style = {styles.requestButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

export default AcceptScreen;