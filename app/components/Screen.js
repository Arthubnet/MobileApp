import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={styles.statusBar}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
