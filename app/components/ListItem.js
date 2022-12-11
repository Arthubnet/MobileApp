import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";

export default function ListItem({ title, description, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.usersImage} source={image} />
      <View style={styles.titlesContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{description}</AppText>
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
