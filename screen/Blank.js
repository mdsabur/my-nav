import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function Blank() {

    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>

            <Text>{counter}</Text>
            <Button onPress={() => { setCounter(counter + 1) }} title='Increment' />
            <Button onPress={() => { setCounter(counter - 1) }} title='Decrese' />

        </View>

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