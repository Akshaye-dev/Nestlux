import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    PlusJakartaSans: require("../assets/images/fonts/PlusJakartaSans.ttf"),
    PlayfairDisplay: require("../assets/images/fonts/PlayfairDisplay.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground
      source={require("../assets/images/bg-image.jpg")}
      className="flex-1"
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View className="flex-row justify-center items-center mt-20">
          <View className="w-12 h-12 rounded-xl bg-orange-700 items-center justify-center">
            <Ionicons name="home-outline" size={24} color="white" />
          </View>
          <Text className="ml-2 text-2xl font-semibold text-white font-heading">
            NESTLUX
          </Text>
        </View>

        <View className="absolute bottom-32 w-full px-8">
          <Text className="text-white text-5xl text-center font-heading">
            Find Your Dream Home
          </Text>
          <Text className="text-light-300 text-center mt-4 text-lg font-regular">
            Extraordinary properties curated for redefined living.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  //For Linear Gradient Overlay
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
});
