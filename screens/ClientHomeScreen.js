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

  const openRequestDetails = () => {
    navigation.navigate('Transaction');
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
          <TouchableOpacity 
            style = {styles.reqBox} 
            onPress={createRequest}>
            <Text style = {styles.newReqText}>Create New Request</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.reqContainer}>
          <Text style = {styles.currentTitleText}>Current Requests</Text>
          
          <TouchableOpacity style = {styles.currentReqBox}>
            <TouchableOpacity style = {styles.reqClickable} onPress={openRequestDetails}>
                <View style = {styles.artStyle}>
                    <Text style = {styles.artStyleText}>Template</Text>
                </View>
                <View style = {styles.reqTextContainer}>
                    <Text style = {styles.reqText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a gallery of
                    </Text>
                </View>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.currentReqBox}>
            <TouchableOpacity style = {styles.reqClickable}>
                <View style = {styles.artStyle}>
                    <Text style = {styles.artStyleText}>Template</Text>
                </View>
                <View style = {styles.reqTextContainer}>
                    <Text style = {styles.reqText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a gallery of
                    </Text>
                </View>
            </TouchableOpacity>
          </TouchableOpacity>

        </View>
      </ScrollView>

    </View>
  );
}

export default ClientHomeScreen;