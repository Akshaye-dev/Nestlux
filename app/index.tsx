import { AppStrings } from "@/constants/strings";
import useSplashController from "@/hooks/useSplashController";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const { isReady, animatedStyles } = useSplashController({
    onSplashFinished: () => router.replace("/signin"),
  });
  if (!isReady) {
    return null; // Render nothing until the splash screen is ready
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
            <Text className="ml-2 text-2xl tracking-[0.18em] text-white font-PlusJakartaSansSemiBold">
              {AppStrings.appName}
            </Text>
          </Animated.View>

          <View className="absolute bottom-16 w-full px-8">
            <Animated.View style={animatedStyles.title}>
              <Text className="text-white text-5xl text-center font-PlayfairDisplay">
                {AppStrings.splash.title}
              </Text>
            </Animated.View>
            <Animated.View style={animatedStyles.subtitle}>
              <Text className="text-light-300 text-center mt-4 text-lg font-PlusJakartaSans">
                {AppStrings.splash.subtitle}
              </Text>
            </Animated.View>
            <Animated.View
              className="mt-8 flex-row justify-center items-center"
              style={animatedStyles.loading}
            >
              <View className="w-9 h-2 rounded-xl bg-accent " />
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
