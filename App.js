import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  var halfScreen = Dimensions.get("screen").width / 2 - 50;
  const handlePress = () => {
    console.log("Pressed the text");
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logoContainer: {
      display: "flex",
      flexDirection: "column",
      zIndex: 1,
      top: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
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

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("./assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.redLogo}
            source={require("./assets/logo-red.png")}
          />
          <Text style={styles.title}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.redBtn}></TouchableOpacity>
          <TouchableOpacity style={styles.greenBtn}></TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
