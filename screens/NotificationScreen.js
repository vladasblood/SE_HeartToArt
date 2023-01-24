import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/notificationStyle.js';

const NotificationScreen = () => {
  const navigation = useNavigation(); 

  return (
    <View style = {styles.box}>
      <View style = {styles.uppermostBar}> 
        <Text style = {styles.title}>Notifications</Text>    
      </View>
      
      <ScrollView> 

        <View style = {styles.requestContainer}>
          <View style = {styles.photoContainer}>
            <Image style = {styles.profilePhoto} source={require('../assets/default-icon.png')} />
          </View>

          <View style = {styles.requests}>
            <Text style = {styles.clientName}>Username</Text>

            <View style = {styles.artStyle}>
              <Text style = {styles.artStyleText}>Art Style</Text>
            </View>

            <Text style = {styles.reqDesc}>Notifs
            </Text>

          </View>
        </View>

      </ScrollView>

    </View>
  );
}

export default NotificationScreen;