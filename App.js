import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ResetPassword from './screens/ResetPassword';
import UserProfileScreen from './screens/UserProfileScreen';


import styles from './styles/styles';
import FeedScreen from './screens/FeedScreen';
import AcceptScreen from './screens/AcceptScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="Home" 
          component={HomeScreen} />

        <Stack.Screen 
          options ={ {headerShown: false} } 
          name="Login" 
          component={LoginScreen} />

        <Stack.Screen 
          options ={ {headerShown: false} } 
          name="Register" 
          component={RegisterScreen} />

        <Stack.Screen 
          options ={ {headerShown: false} } 
          name="Feed" 
          component={FeedScreen} />

        <Stack.Screen 
          options ={ {headerShown: false} } 
          name="Accept" 
          component={AcceptScreen} />

        <Stack.Screen 
          options={{ headerShown: false }} 
          name="Reset" 
          component={ResetPassword} />
        
        <Stack.Screen
          options={{ headerShown: false }}
          name="UserProfile"
          component={UserProfileScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

