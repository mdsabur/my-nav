import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function Details() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [myloc, setmyloc] = useState(null);


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    });

    let text = 'Waiting..';

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location.coords.longitude);

    }


    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}
                />
            </MapView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});