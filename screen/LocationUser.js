import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { TabNavigator } from "react-navigation";
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';


class LocationUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
		this.state = {
            	Region: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
        };
		
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Location");
                console.log(position);
				
				let region = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421 
				};
			              				
				this.setState({
                   Region: region
                });
				
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
					ref = {(ref)=>this.mapView=ref}
                    initialRegion={this.state.Region}
					region={this.state.Region}
					
					
					showsUserLocation = {true}
					>

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

export default LocationUser;