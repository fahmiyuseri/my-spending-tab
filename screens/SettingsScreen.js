import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  state = {weather:null}
  getWeather = async() => {
    location = "36.96,-122.02"
    const response = await fetch("https://www.metaweather.com/api/location/search/?lattlong="+location)
    const json = await response.json();
    this.setState({weather: json})
    console.log(JSON.stringify(this.state.weather))
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    this.getWeather()
   
    return <ExpoConfigView />;
  }
}
