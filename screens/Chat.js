import React from 'react'

import { GiftedChat } from 'react-native-gifted-chat';

export default function Chat() {
    return (
        <GiftedChat />
    )
}


// const ChatScreen = () => {
//   const [messages, setMessages] = useState([]);
//   const navigation = useNavigation();
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const db = getFirestore(app);

//   useEffect(()=>{

//     const ChatScreen = ({navigation}) => {
//       const [messages, setMessages] = useState([]);
      
//       useEffect(() => {
//       const unsubscribe = db
//       .collection("chats")
//       .orderBy("createdAt", "desc")
//       .onSnapshot(snapshot => {
//       setMessages(
//       snapshot.docs.map(doc => ({
//       _id: doc.id,
//       createdAt: doc.data().createdAt.toDate(),
//       text: doc.data().text,
//       user: doc.data().user}))
//       );
//       });
//       return unsubscribe;
//       }, []);
//       };

//   }, [])

//   const onSend = useCallback(async (messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//     const {
//       _id,
//       createdAt,
//       text,
//       user
//     } = messages[0]
//     addDoc(collection(db, "chats"), {
//       _id,
//       createdAt,
//       text,
//       user
//     })
//   }, [])

//   useEffect(()=>{
//     navigation.setOptions({
//       headerLeft:()=>(
//         <View style={{marginLeft: 20}}>
//           <Avatar
//             rounded
//             source={{
//               uri:auth?.currentUser?.photoURL
//             }}
//           />
//         </View>
//       ),
//       headerRight: () =>  (
//         <TouchableOpacity style ={{
//           marginRight: 30,
//         }}
//           onPress={signOut}
//         >
//         <AntDesign name="logout" size={24} color="black" />
//         </TouchableOpacity>
//       )
//     })

//   }, [])

//   const signOut = () => { 
//     auth.signOut().then(() => {
//       // Sign-out successful.
//       navigation.replace('Login')
//     }).catch((error) => {
//       // An error happened.
//     });
//   }
//   return (
//     <GiftedChat
//       messages={messages}
//       showAvatarForEveryMessage={true}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: auth?.currentUser?.email,
//         name: auth?.currentUser?.displayName,
//         avatar:auth?.currentUser?.photoURL
//       }}
//     />
//   )
// }

// export default ChatScreen