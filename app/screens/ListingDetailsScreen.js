import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import AppText from "../components/AppText";

import colors from "../config/colors";

export default function ListingDetailsScreen({ title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/bmw.jpg")} style={styles.cardImage} />
      <View style={styles.titlesContainer}>
        <AppText style={styles.titles}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  cardImage: {
    width: "100%",
    height: 300,
  },
  titlesContainer: {
    padding: 20,
  },
  titles: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
