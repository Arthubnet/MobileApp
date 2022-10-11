import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Pressed the text");
  };
  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>
        Open up App.js to start working on your app!!
      </Text>
      <Image
        source={{ width: 200, height: 200, uri: "https://picsum.photos/200" }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
