import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
const App = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 22.57371753630649,
    longitude: 88.4376725968472,
  });

  return (
    <View style={styles.MainContainer}>
      <MapView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        showsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.062,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={coordinates} />
      </MapView>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
