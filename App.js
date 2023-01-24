import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Signup from './screens/Signup';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen options ={ {headerShown: false, } } name="Home" component={Home} />
			<Stack.Screen options ={ {headerShown: false} } name="Login" component={Login} />
			<Stack.Screen options ={ {headerShown: false} } name="Signup" component={Signup} />
			<Stack.Screen options ={ {headerShown: false} } name="Chat" component={ChatScreen} />
		</Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
  },
});

