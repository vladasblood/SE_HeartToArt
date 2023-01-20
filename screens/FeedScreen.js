import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from './styles/feedStyle.js';

const Stack = createNativeStackNavigator();

const FeedScreen = () => {
  const navigation = useNavigation();
  navigation.navigate('Feed');

  const acceptRequest = () => {
    navigation.navigate('Accept');
  }

  return (
    <View style = {styles.box}>
      <View style = {styles.uppermostBar}> 
              
      </View>
      
      <ScrollView> 
        <View style = {styles.upBar}> 
          
        </View>

        <View style = {styles.requestContainer}>
          <View style = {styles.photoContainer}>
            <Image style = {styles.profilePhoto} source={require('./icons/default-icon.png')} />
          </View>

          <View style = {styles.requests}>
            <Text style = {styles.clientName}>Username</Text>

            <View style = {styles.artStyle}>
              <Text style = {styles.artStyleText}>Art Style</Text>
            </View>

            <Text style = {styles.reqDesc}>Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>

            <TouchableOpacity style={styles.viewButton} onPress={acceptRequest}>
                <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style = {styles.requestContainer}>
          <View style = {styles.photoContainer}>
              <Image style = {styles.profilePhoto} source={require('./icons/default-icon.png')} />
          </View>

          <View style = {styles.requests}>
              <Text style = {styles.clientName}>Username</Text>

              <View style = {styles.artStyle}>
                  <Text style = {styles.artStyleText}>Art Style</Text>
              </View>

              <Text style = {styles.reqDesc}>Lorem Ipsum is simply dummy text of the printing and typesetting 
                  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>

              <TouchableOpacity style={styles.viewButton} onPress={acceptRequest}>
                  <Text style={styles.viewButtonText}>View</Text>
              </TouchableOpacity>
          </View>
        </View>

        <View style = {styles.requestContainer}>
          <View style = {styles.photoContainer}>
              <Image style = {styles.profilePhoto} source={require('./icons/default-icon.png')} />
          </View>

          <View style = {styles.requests}>
              <Text style = {styles.clientName}>Username</Text>

              <View style = {styles.artStyle}>
                  <Text style = {styles.artStyleText}>Art Style</Text>
              </View>

              <Text style = {styles.reqDesc}>Lorem Ipsum is simply dummy text of the printing and typesetting 
                  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>

              <TouchableOpacity style={styles.viewButton} onPress={acceptRequest} >
                  <Text style={styles.viewButtonText}>View</Text>
              </TouchableOpacity>
          </View>
        </View>

        <View style = {styles.requestContainer}>
          <View style = {styles.photoContainer}>
              <Image style = {styles.profilePhoto} source={require('./icons/default-icon.png')} />
          </View>

          <View style = {styles.requests}>
              <Text style = {styles.clientName}>Username</Text>

              <View style = {styles.artStyle}>
                  <Text style = {styles.artStyleText}>Art Style</Text>
              </View>

              <Text style = {styles.reqDesc}>Lorem Ipsum is simply dummy text of the printing and typesetting 
                  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>

              <TouchableOpacity style={styles.viewButton} onPress={acceptRequest}>
                  <Text style={styles.viewButtonText}>View</Text>
              </TouchableOpacity>
          </View>
        </View>

        <View style = {styles.downBar}>

        </View>
      </ScrollView>

      <View style = {styles.naviBar}> 

      </View>
    </View>
  );
}

export default FeedScreen;

// hatdog@xd.com hatdog123