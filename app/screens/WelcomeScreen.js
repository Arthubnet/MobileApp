import React from "react";
/* rfc */

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.redLogo}
          source={require("../assets/logo-red.png")}
        />
        <Text style={styles.title}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.redBtn}></TouchableOpacity>
        <TouchableOpacity style={styles.greenBtn}></TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

/* rnss */

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    top: 100,
  },
  redLogo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  buttonsContainer: {
    width: "100%",
  },
  redBtn: {
    backgroundColor: "tomato",
    width: "100%",
    padding: 30,
  },
  greenBtn: {
    backgroundColor: "turquoise",
    width: "100%",
    padding: 30,
  },
});
