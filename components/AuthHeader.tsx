import { AppStrings } from "@/constants/strings";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const AuthHeader = () => {
  return (
    <ImageBackground
      source={require("../assets/images/bg-image.jpg")}
      className="flex-[1] w-full"
    >
      <View style={styles.overlay} />
      <View className="flex-row justify-start items-center mt-16 ml-4">
        <View className="w-12 h-12 rounded-full bg-accent items-center justify-center">
          <Ionicons name="home-outline" size={20} color="white" />
        </View>
        <Text className="ml-2 text-xl tracking-[0.18em] text-white font-PlusJakartaSansSemiBold">
          {AppStrings.appName}
        </Text>
      </View>
      <LinearGradient
        colors={["transparent", "#FFFFFF"]}
        className="absolute bottom-0 w-full h-20"
      />
    </ImageBackground>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  //For Linear Gradient Overlay
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
});
