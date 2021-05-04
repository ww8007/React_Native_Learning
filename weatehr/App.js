import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      // api로 보내서 날씨를 받아오게 만듬
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you ", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
