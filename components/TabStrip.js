import React, { Component } from 'react';
import {
  Text,
  TabBarIOS,
  StyleSheet,
  View
} from 'react-native';
import PlaceMap from './PlaceMap';
import AddLocation from './AddLocation';

export default class TabStrip extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 1,
      markers: [{
        title: 'Central Perk',
        coordinates: {
          latitude: 37.78825,
          longitude: -122.4320,
        },
      },
      {
        title: 'Krusty Krab',
        coordinates: {
          latitude: 37.78825,
          longitude: -122.4372,
        },
      }]
    }
  }
  handleFavTabPress = () => {
    this.setStateSelectedTab(0);
  }

  handlePlcTabPress = () => {
    this.setStateSelectedTab(1);
  }

  setStateSelectedTab = (tabId) => {
    this.setState({ selectedTab: tabId })
  }

  handleAddLocation = (newMarker) => {
    const newMarkers = this.state.markers.concat(newMarker);

    this.setState({
      markers: newMarkers,
    });
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="favorites"
          selected={this.state.selectedTab === 0}
          onPress={this.handleFavTabPress}
        >
          <PlaceMap markers={this.state.markers} />

        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Place"
          icon={require('./../assets/locationMarker.png')}
          selected={this.state.selectedTab === 1}
          onPress={this.handlePlcTabPress}
        >
          <AddLocation onAddLocation={(newMarker) => this.handleAddLocation(newMarker)} />
        </TabBarIOS.Item>
      </TabBarIOS>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    //color: '#333333',
    marginTop: 50,
  },
  view: {
    backgroundColor: '#fed',
    flex: 1,
  }
});