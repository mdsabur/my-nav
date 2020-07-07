import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

import HomeScreen from './screen/HomeScreen';
import SettingsScreen from './screen/SettingsScreen';
import NotificationScreen from './screen/NotificationScreen';


import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Notification" component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>);
}





