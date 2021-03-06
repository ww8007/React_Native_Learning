import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "87e77800bf021fa404e8c0c7f3e3fdb5";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
      // api로 보내서 날씨를 받아오게 만듬
    } catch (error) {
      Alert.alert("Can't find you ", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather condition={condition} temp={Math.round(temp)} />
    );
  }
}
