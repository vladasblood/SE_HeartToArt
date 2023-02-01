import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import { React, useState, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { onSnapshot, collection, query, getDocs, where } from 'firebase/firestore';
import { auth, db } from '../firebase.js';

import { styles } from '../styles/clientHomeStyle.js';

const ClientHomeScreen = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  //   const navigation = useNavigation();

  const [userReq, setUserReq] = useState([]);

  const createRequest = () => {
    navigation.navigate('CreateRequest');
  }

  const openRequestDetails = () => {
    navigation.navigate('Transaction');
  }

  useLayoutEffect(() => {

    const editProfile = query(collection(db, 'request'), where("uID", "==", auth.currentUser.uid));
    getDocs(editProfile)
      .then(response => {
        const das = response.docs.map(doc => ({
          artValue: doc.data.artValue,
          date: doc.data.date,
          desc: doc.data.desc,
          photoURL: doc.data.photoURL,
          reqStatus: doc.data.reqStatus,
          uID: doc.data.uID,
          userName: doc.data.userName
        }))
        setUserReq(das);
      }
      )
  }
  )

  return (
    <View style={styles.box}>
      <View style={styles.uppermostBar}>

      </View>

      <View style={styles.outerSearch}>
      </View>


      <View style={styles.reqContainer}>
        <TouchableOpacity
          style={styles.reqBox}
          onPress={createRequest}>
          <Text style={styles.newReqText}>Create New Request</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default ClientHomeScreen;