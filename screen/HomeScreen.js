import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import TabAScreen from './TabAScreen';
import TabBScreen from './TabBScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'TabA') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'TabB') {
                        iconName = focused
                            ? 'ios-list-box'
                            : 'ios-list';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="TabA" component={TabAScreen} />
            <Tab.Screen name="TabB" component={TabBScreen} />
        </Tab.Navigator>
    );
}




