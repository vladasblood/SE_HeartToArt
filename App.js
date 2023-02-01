import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import React, {useState,} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ResetPassword from './screens/ResetPassword';
import UserProfileScreen from './screens/UserProfileScreen';
import FeedScreen from './screens/FeedScreen';
import AcceptScreen from './screens/AcceptScreen';
import InboxScreen from './screens/InboxScreen';
import ClientHomeScreen from './screens/ClientHomeScreen';
import ManageAccountScreen from './screens/ManageAccountScreen';
import CreateRequestScreen from './screens/CreateRequestScreen';
import TransactionDetailsScreen from './screens/TransactionDetailsScreen';

import Chat from './screens/Chat';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
            options={{ headerShown: false }} 
            name="Reset" 
            component={ResetPassword} />

        <Stack.Screen 
            options={{ headerShown: false }}
            name = "NavigationBarClient"
            component={NaviBarClient} />

        <Stack.Screen 
            options={{ headerShown: false }}
            name = "NavigationBarArtist"
            component={NaviBarArtist} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}

const Tab = createBottomTabNavigator();

function NaviBarArtist() {

  return(
   
        <Tab.Navigator 
            screenOptions = {{ 
                headerShown: false, 
                tabBarStyle: {
                backgroundColor: '#0364cd',
                height: 50,
            },
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
        }}
      >

        <Tab.Screen
          name = 'Feed' 
          component = {FeedScreen} 
          options = {{
            tabBarItemStyle: {
              marginTop: 1,
            },
            tabBarIcon: () => (<MaterialCommunityIcons 
              name='home' 
              color={'white'} 
              size={32} />
            )
          }}
        />

        <Tab.Screen
          name = 'ManageAccount'
          component = {ManageAccountScreen} 
          options = {() => ({
            tabBarStyle: {
                display: 'none'
            }, 
            tabBarButton: () => null,
          })}
        />

        <Tab.Screen
          name = 'Accept' 
          component = {AcceptScreen} 
          options = {() => ({
            tabBarStyle: {
                display: 'none'
            }, 
            tabBarButton: () => null,
          })}
        />

        <Tab.Screen
          name = 'Chat' 
          component = {Chat} 
          options = {() => ({
            tabBarStyle: {
                display: 'none'
            }, 
            tabBarButton: () => null,
          })}
        />

        <Tab.Screen
          name = 'Transaction' 
          component = {TransactionDetailsScreen} 
          options = {() => ({
            tabBarStyle: {
                display: 'none'
            }, 
            tabBarButton: () => null,
          })}
        />

        <Tab.Screen
          name = 'Inbox' 
          component = {InboxScreen} 
          options = {{
            tabBarItemStyle: {
              marginTop: 2,
            },
            tabBarIcon: () => (<MaterialCommunityIcons 
              name = 'message-text-outline' 
              color = 'white' 
              size = {32}
            />)
          }}
        />

        <Tab.Screen
          name = 'Profile' 
          component = {UserProfileScreen} 
          options = {{
            tabBarItemStyle: {
              marginTop: 2,
            },
            tabBarIcon: () => (<Image 
                style = {styles.img}
                source = {require('./assets/default-icon.png')}
            />)
          }}
        />
          
      </Tab.Navigator>
  
  )
}


function NaviBarClient() {

    return(
     
        <Tab.Navigator 
              screenOptions = {{ 
                  headerShown: false, 
                  tabBarStyle: {
                  backgroundColor: '#0364cd',
                  height: 50,
              },
              tabBarShowLabel: false,
              tabBarHideOnKeyboard: true,
          }}
        >
  
          <Tab.Screen
            name = 'ClientHome'
            component = {ClientHomeScreen} 
            options = {{
              tabBarItemStyle: {
                marginTop: 1,
              },
              tabBarIcon: () => (<MaterialCommunityIcons 
                name='home' 
                color={'white'} 
                size={32} />
              )
            }}
          />

          <Tab.Screen
            name = 'ManageAccount' 
            component = {ManageAccountScreen} 
            options = {() => ({
              tabBarStyle: {
                  display: 'none'
              }, 
              tabBarButton: () => null,
            })}
          />
  
          <Tab.Screen
            name = 'Chat' 
            component = {Chat} 
            options = {() => ({
              tabBarStyle: {
                  display: 'none'
              }, 
              tabBarButton: () => null,
            })}
          />
  
          <Tab.Screen
            name = 'CreateRequest' 
            component = {CreateRequestScreen} 
            options = {() => ({
              tabBarStyle: {
                  display: 'none'
              }, 
              tabBarButton: () => null,
            })}
          />
  
          <Tab.Screen
            name = 'Transaction' 
            component = {TransactionDetailsScreen} 
            options = {() => ({
              tabBarStyle: {
                  display: 'none'
              }, 
              tabBarButton: () => null,
            })}
          />
  
          <Tab.Screen
            name = 'Inbox' 
            component = {InboxScreen} 
            options = {{
              tabBarItemStyle: {
                marginTop: 2,
              },
              tabBarIcon: () => (<MaterialCommunityIcons 
                name = 'message-text-outline' 
                color = 'white' 
                size = {32}
              />)
            }}
          />
  
          <Tab.Screen
            name = 'Profile' 
            component = {UserProfileScreen} 
            options = {{
              tabBarItemStyle: {
                marginTop: 2,
              },
              tabBarIcon: () => (<Image 
                  style = {styles.img}
                  source = {require('./assets/default-icon.png')}
              />)
            }}
          />
            
        </Tab.Navigator>
    
    )
  }

const styles = StyleSheet.create({
  img: {
    maxHeight: 30,
    maxWidth: 30,
    borderRadius: 15,
  }
});

