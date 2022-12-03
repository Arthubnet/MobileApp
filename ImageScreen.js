import { Image, StyleSheet, View } from "react-native";

export default function ImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeBtn}></View>
      <View style={styles.deleteBtn}></View>
      <Image
        resizeMode="contain"
        style={styles.picture}
        source={require("./app/assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  closeBtn: {
    width: 50,
    height: 50,
    top: 40,
    left: 30,
    position: "absolute",
    backgroundColor: "tomato",
  },
  deleteBtn: {
    top: 40,
    right: 30,
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: "turquoise",
  },
  picture: {
    width: "100%",
    height: "100%",
  },
});
