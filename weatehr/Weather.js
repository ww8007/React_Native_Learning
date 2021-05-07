import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          name="weather-lightning-rainy"
          size={96}
          color="black"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfcontainer}></View>
    </View>
  );
}

Weather.prototype = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clouds",
    "atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Dust",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
