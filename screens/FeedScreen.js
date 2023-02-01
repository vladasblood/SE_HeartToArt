import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { React, useEffect, useState, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../firebase.js';

import { styles } from '../styles/feedStyle.js';
import { onSnapshot, collection } from 'firebase/firestore';

const FeedScreen = ({navigation}) => {
//   const navigation = useNavigation();

  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    const ref = collection(db, "requests");

    onSnapshot(ref, (categories) => 
        setData(categories.docs.map((category) => ({
            data: category.data()
            }))
        )
    )
  })

  return (
    <View style = {styles.box}>
        <View style = {styles.uppermostBar}> 
            
        </View>
        <ScrollView> 
        {data.map((item, key) => (
            <View key = {key} >
            
                <View style = {styles.requestContainer}>
                    <View style = {styles.photoContainer}>
                        <Image style = {styles.profilePhoto} source={{uri: item.data.photoURL}} />
                    </View>

                    <View style = {styles.requests}>
                        <Text style = {styles.clientName}>{item.data.userName}</Text>

                        <View style = {styles.artStyle}>
                        <Text style = {styles.artStyleText}>{item.data.artValue}</Text>
                        </View>

                        <Text style = {styles.reqDesc}>
                         {item.data.desc}
                        </Text>

                        <TouchableOpacity 
                            style={styles.viewButton} 
                            onPress={() => {navigation.navigate("Accept", { 
                                userName: item.data.userName,
                                photoURL: item.data.photoURL,
                                uID: item.data.uID,
                                date: item.data.date,
                                desc: item.data.desc,
                                artValue: item.data.artValue,
                                reqStatus: item.data.reqStatus,
                                })}
                            }>
                            <Text style={styles.viewButtonText}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            ))}
            <View style = {styles.downBar}>

            </View>
        </ScrollView>
    </View>
  );
}

export default FeedScreen;