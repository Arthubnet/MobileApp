import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";

export default function ListItem() {
  return (
    <View style={styles.container}>
      <Image style={styles.usersImage} source={require("../assets/user.jpg")} />
      <View style={styles.titlesContainer}>
        <AppText style={styles.title}>Ragnar Lothbrok</AppText>
        <AppText style={styles.subTitle}>2 Listings</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  usersImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  titlesContainer: {
    flexDirection: "column",
    padding: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
