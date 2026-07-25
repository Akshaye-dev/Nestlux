import { AppStrings } from "@/constants/strings";
import { useAuth } from "@/context/AuthContext";
import useSplashController from "@/hooks/useSplashController";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const [animatedFinished, setAnimatedFinished] = useState(false);
  const { loading, user } = useAuth();
  const { isReady, animatedStyles } = useSplashController({
    onSplashFinished: () => {
      setAnimatedFinished(true);
    },
  });

  useEffect(() => {
    if (animatedFinished) {
      if (loading) {
        return; // Wait until firebase auth state is determined before navigating to the next screen
      }
      if (user) {
        router.replace("/home");
      } else {
        router.replace("/signin");
      }
    }
  }, [animatedFinished, loading, user, router]);

  if (!isReady) {
    return null; // Do not render react splash screen until the splash screen fonts/components are ready
  }

  return (
    <>
      <StatusBar hidden />
      <ImageBackground
        source={require("../assets/images/bg-image.jpg")}
        className="flex-1"
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Animated.View
            style={animatedStyles.logo}
            className="flex-row justify-center items-center mt-20"
          >
            <View className="w-12 h-12 rounded-xl bg-accent items-center justify-center">
              <Ionicons name="home-outline" size={24} color="white" />
            </View>
            <Text className="ml-2 text-2xl tracking-[0.18em] text-white font-plus-jakarta-sans-semi-bold">
              {AppStrings.appName}
            </Text>
          </Animated.View>

          <View className="absolute bottom-16 w-full px-8">
            <Animated.View style={animatedStyles.title}>
              <Text className="text-white text-5xl text-center font-playfair-display">
                {AppStrings.splash.title}
              </Text>
            </Animated.View>
            <Animated.View style={animatedStyles.subtitle}>
              <Text className="text-light-300 text-center mt-4 text-lg font-plus-jakarta-sans">
                {AppStrings.splash.subtitle}
              </Text>
            </Animated.View>
            <Animated.View
              className="mt-8 flex-row justify-center items-center"
              style={animatedStyles.loading}
            >
              <View className="w-9 h-2 rounded-xl bg-accent" />
              <View className="w-2 h-2 rounded-xl bg-light-300 ml-2" />
              <View className="w-2 h-2 rounded-xl bg-light-300 ml-2" />
            </Animated.View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  //For Linear Gradient Overlay
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
});
