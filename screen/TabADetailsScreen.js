import React from 'react';
import { Button, View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';


export default function TabADetailsScreen({ navigation }) {


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Welcome to TabA page!
      </Text>
            <Button
                onPress={() => navigation.navigate('TabA Details')}
                title="Go to TabA Details"
            />
        </View>
    );
}
