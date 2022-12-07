import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="close"
        size={35}
        color={colors.white}
        style={styles.closeBtn}
      />
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={35}
        color={colors.white}
        style={styles.deleteBtn}
      />
      <Image
        resizeMode="contain"
        style={styles.picture}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeBtn: {
    top: 40,
    left: 30,
    position: "absolute",
  },
  deleteBtn: {
    top: 40,
    right: 30,
    position: "absolute",
  },
  picture: {
    width: "100%",
    height: "100%",
  },
});
