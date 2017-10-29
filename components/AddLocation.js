import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

export default class AddLocation extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      longitude: '',
      latitude: '',
      titleError: '',
      longitudeError: '',
      latitudeError: ''
    }
  }
  handleAddPlace = () => {
    if (!this.state.title) {
      this.setState({
        titleError: 'Title is a Required Field'
      });
    }

    if (!this.state.latitude) {
      this.setState({
        latitudeError: 'Latitude is a Required Field'
      });
    }

    if (!this.state.longitude) {
      this.setState({
        longitudeError: 'Longitude is a Required Field'
      });
    }

    const isError = this.state.titleError || this.state.latitudeError || this.state.latitudeError;

    if (!isError) {
      const marker = {
        title: this.state.title,
        coordinates: {
          latitude: parseFloat(this.state.latitude),
          longitude: parseFloat(this.state.longitude),
        },
      };

      this.props.onAddLocation(marker);

      AlertIOS.alert('Location added and available in Favorites');
    }
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Title</Text>
        <TextInput style={styles.textInput} value={this.state.title}
          onChangeText={(title) => this.setState({ title })} />

        <Text style={styles.text}>Latitude</Text>
        <TextInput style={styles.textInput} keyboardType='numbers-and-punctuation'
          value={this.state.latitude} onChangeText={(latitude) => this.setState({ latitude })} />

        <Text style={styles.text}>Longitude</Text>
        <TextInput style={styles.textInput} keyboardType='numbers-and-punctuation'
          value={this.state.longitude} onChangeText={(longitude) => this.setState({ longitude })} />

        <TouchableHighlight style={styles.button} onPress={this.handleAddPlace}>
          <Text style={styles.buttonText}>Add Location</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  view: {
    flex: 1,
    backgroundColor: '#fed',
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8
  },
  button: {
    backgroundColor: '#ff7f50',
    padding: 12,
    borderRadius: 6
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    color: '#333333',
    marginBottom: 5
  }
}