import React, { Component } from 'react';
import {
  AlertIOS,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Linking
} from 'react-native';
import MapView from 'react-native-maps';

export default class PlaceMap extends Component {
  constructor() {
    super();
    this.region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }


  render() {

    return (

      <MapView style={styles.map} initialRegion={this.region}>
        {this.props.markers.map((marker, index) => {
          return <MapView.Marker key={index} coordinate={marker.coordinates} title={marker.title} />
        })}
      </MapView>

    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

});