import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './Login';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  navigation.navigate('Register')
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})