import { 
  Text, 
  View, 
  Image, 
  Button, 
  TouchableOpacity, 
  ScrollView,
  TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../styles/clientHomeStyle.js';

const ClientHomeScreen = () => {
  const [text, onChangeText] = React.useState('');
  const navigation = useNavigation();

  const createRequest = () => {
    navigation.navigate('CreateRequest');
  }

  return (
    <View style = {styles.box}>
      <View style = {styles.uppermostBar}> 
        
      </View>

      <View style = {styles.outerSearch}>
        <View style = {styles.searchBar}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search Artists..." />

          <TouchableOpacity style = {styles.searchIcon}>
            <MaterialCommunityIcons 
              name='magnify' 
              color={'#777777'} 
              size={25} />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView> 
        <View style = {styles.reqContainer}>
          <TouchableOpacity style = {styles.reqBox}>
            <Text style = {styles.reqText}>Create New Request</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.reqContainer}>
          <Text style = {styles.currentTitleText}>Current Requests</Text>
          <TouchableOpacity style = {styles.currentReqBox}>
            
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
}

export default ClientHomeScreen;