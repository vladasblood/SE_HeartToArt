import React, { useState, useCallback, useEffect, useLayoutEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, setDoc} from "firebase/firestore";
import { auth, db } from '../firebase.js';
import { signOut } from 'firebase/auth';


// import { auth } from 'firebase/auth';
// import { db } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '../config/firebase';
// import app from '../firebase';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Avatar } from 'react-native-elements';

import { GiftedChat } from 'react-native-gifted-chat';

export default function Chat() {

    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();    

    //read the user users collection and get the photourl
    // const { photoURL } = auth.currentUser;

  const onSignOut = () => {
      signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 10
              }}
              onPress={onSignOut}
            >
              <AntDesign name="logout" size={24} color={colors.gray} style={{marginRight: 10}}/>
            </TouchableOpacity>
          )
        });
      }, [navigation]);

    useLayoutEffect(() => {

        const collectionRef = collection(db, 'chats');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));
        const user = auth.currentUser;
        const unsubscribe = onSnapshot(q, querySnapshot => {
        console.log('querySnapshot unsusbscribe');
          setMessages(
            querySnapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
                PhotoURL: doc.data().PhotoURL,  
            }))
          );
        });
        return unsubscribe;
      }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages)
        );
        // setMessages([...messages, ...messages]);
        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(db, 'chats'), {
          _id,
          createdAt,
          text,
          user,
        });
      }, []);

      return (
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={false}
          showUserAvatar={false}
          renderAvatar={null}
          onSend={messages => onSend(messages)}
          messagesContainerStyle={{
            backgroundColor: '#fff'
          }}
          textInputStyle={{
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
          user={{
            // Use the data of the current user, give the name and avater

            _id: auth?.currentUser?.email,
            name: auth?.currentUser?.displayName,
            // avatar: 'https://placeimg.com/140/140/any',
          }}
        />
      );
}