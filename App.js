// import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Chat from './screens/Chat';

const Stack = createStackNavigator();

function AppStack() {
	return (
		<Stack.Navigator>
    <Stack.Screen options ={ {headerShown: false, } } name="Home" component={Home} />
			<Stack.Screen options ={ {headerShown: false} } name="Login" component={Login} />
      <Stack.Screen options ={ {headerShown: false} } name="Signup" component={Signup} />
      <Stack.Screen options ={ {headerShown: false} } name="Chat" component={Chat} />
		</Stack.Navigator>
	)
}

function RootNavigator() {
	return (
		<NavigationContainer>
      <AppStack />
    </NavigationContainer>
	)
}

export default function App() {
  return <RootNavigator />
}

