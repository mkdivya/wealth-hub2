import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "SourceCodePro-ExtraLight": require("./assets/fonts/SourceCodePro-ExtraLight.otf"),
    "CharmanSerif-Black.otf": require("./assets/fonts/CharmanSerif-Black.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.default}>This text has default style</Text>
      <Text style={styles.sourcepro}>This text uses Source Pro Font</Text>
      <Text style={styles.sourceprolight}>This text uses Source Pro Font</Text>
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
  default: {
    fontSize: 20,
  },
  sourcepro: {
    fontSize: 20,
    fontFamily: "CharmanSerif-Black",
  },
  sourceprolight: {
    fontSize: 20,
    fontFamily: "CharmanSerif-Black",
  },
});