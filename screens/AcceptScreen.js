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
import reqID from './FeedScreen';
import { styles } from '../styles/acceptStyle.js';
import { auth, db } from '../firebase';
import { doc, updateDoc, setDoc, query, collection, getDocs, where } from 'firebase/firestore';
const Stack = createNativeStackNavigator();


const AcceptScreen = ({ route, navigation }) => {
//   const navigation = useNavigation();

  const clickedUser = route.params;
  const claimed = "claimed";

  const date = clickedUser.date.toDate().toString().replace('GMT+0000 (GMT)', '');

  const confirmAccept = async () => {

    //Update Specific Request into CLAIMED
    const getuid = query(doc(db, 'requests', clickedUser.uID));
    await updateDoc(getuid, {
      reqStatus: claimed,
    })
    
    backToFeed();
  }

  const backToFeed = () => {
    navigation.navigate('Feed');
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
                source = {{uri : clickedUser.photoURL}}
                />
            </View>

            <View style = {styles.requests}>
              <Text style = {styles.clientName}>{clickedUser.userName}</Text>

              <View style = {styles.artStyle}>
                <Text style = {styles.artStyleText}>{clickedUser.artValue}</Text>
              </View>

              <Text style = {styles.reqDesc}>
                {clickedUser.desc}
              </Text>

              <View style = {styles.dateContainer}>
                <Text style = {styles.targ}>Target Date: </Text>
                <Text style = {styles.dateStyle}>{date}</Text>
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
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

export default AcceptScreen;