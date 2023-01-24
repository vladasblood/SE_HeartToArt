import { 
    Button, 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView, 
    Image, 
    TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../styles/manageAccountStyle.js';

export default function ManageAccountScreen({ navigation }) {

    return (
        <SafeAreaView style={[styles.box]}>
            <View style = {styles.uppermostBar}> 

                <Text style = {styles.title}>
                    Manage Account
                </Text>
            </View>
            <ScrollView>
            
                <View style={styles.downBar}>
                        
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}