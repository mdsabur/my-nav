import React from 'react';

import TabADetailsScreen from './TabADetailsScreen';
import SendNotification from './notification/PushNotification'


import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function TabAScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
            <Stack.Screen name="TabA Details" component={SendNotification} />
        </Stack.Navigator>
    );
}

