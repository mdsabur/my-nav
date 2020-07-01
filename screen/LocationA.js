import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { TabNavigator } from "react-navigation";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


class LocationA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Location");
                console.log(position);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle}

                    initialRegion={{
                        latitude: 23.7300206,
                        longitude: 90.37976,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003
                    }} >

                    {!!this.state.latitude && !!this.state.longitude &&
                        <MapView.Marker
                            coordinate={{
                                "latitude": this.state.latitude,
                                "longitude": this.state.longitude
                            }}
                            title={"My Location"}
                            A description={"description"}
                        />}




                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default LocationA;