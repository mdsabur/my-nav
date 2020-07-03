import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import TabAScreen from './TabAScreen';
//import TabBScreen from './TabBScreen';

//import Details from './Details';
//import Blank from './Blank';
import * as Location from 'expo-location';
import LocationUser from './LocationUser';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {

    global.region = {};

    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});

            let region = {
                latitude: parseFloat(location.coords.latitude),
                longitude: parseFloat(location.coords.longitude),
            };

            global.region = region;
            console.log("User Location");
            console.log(global.region);
        })();
    });


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
            <Tab.Screen name="TabB" component={LocationUser} />
        </Tab.Navigator>
    );
}




