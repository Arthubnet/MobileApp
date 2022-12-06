import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

import colors from "../config/colors";

export default function AppButton({ title, color = "primary" }) {
  console.log([styles.button]);
  console.log([styles.button, { backgroundColor: colors[color] }]);
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.secondary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
