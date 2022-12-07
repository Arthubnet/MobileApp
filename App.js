import React from "react";
/* rfc */

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View, Text, StyleSheet } from "react-native";

import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/ListItem";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    /*  <View style={styles.container}>
      <ListingDetailsScreen title={"BMW X5 G-POWER!"} subTitle={"$83 000"} />
      <View style={styles.usersContainer}>
        <ListItem />
      </View>
    </View> */
    <ViewImageScreen />
  );
}

/* rnss */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*   backgroundColor: "#f8f4f4", */
  },
});
