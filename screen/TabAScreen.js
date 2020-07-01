import React from 'react';

import TabADetailsScreen from './TabADetailsScreen';
import Details from './Details';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function TabAScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
            <Stack.Screen name="TabA Details" component={Details} />
        </Stack.Navigator>
    );
}
