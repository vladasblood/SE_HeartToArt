import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { React, useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../styles/inboxStyle.js';

import { query, collection, orderBy, onSnapshot, docs, } from 'firebase/firestore';
import { auth, db } from '../firebase.js';

const InboxScreen = () => {
  const navigation = useNavigation(); 

  const seeMessage = () => {
    navigation.navigate('Chat');
  }

//   const [latest, setLatest] = useState([]);

  return (
    <View style = {styles.box}>
      <View style = {styles.uppermostBar}> 
      </View>
      
      <ScrollView> 
        <TouchableOpacity style={styles.requestContainer} onPress={seeMessage}>
          <View style = {styles.photoContainer}>
            <Image style = {styles.profilePhoto} source={require('../assets/default-icon.png')} />
          </View>
          <View style = {styles.messageContainer}>
            <Text style = {styles.userName}>View Chat</Text>
            
            <Text style = {styles.messageStyle}></Text>
            
          </View>
          <MaterialCommunityIcons 
            name='chevron-right' 
            color='#4f4f4f' 
            size={30} 
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}

export default InboxScreen;