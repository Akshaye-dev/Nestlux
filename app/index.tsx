import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const logoAnim = useRef(new Animated.Value(-10)).current; //Float logo top to down animation
  const titleAnim = useRef(new Animated.Value(20)).current; //Float title down to top animation
  const logoOpacityAnim = useRef(new Animated.Value(0)).current; //Opacity animation for logo
  const titleOpacityAnim = useRef(new Animated.Value(0)).current; //Opacity animation for title and subtitle
  const subtitleOpacityAnim = useRef(new Animated.Value(0)).current; //Opacity animation for title and subtitle
  const loadingScaleAnim = useRef(new Animated.Value(0)).current; //Scale animation for loading screen
  const loadingOpacityAnim = useRef(new Animated.Value(0)).current; //Opacity animation for loading screen
  const [fontsLoaded, fontsError] = useFonts({
    PlusJakartaSans: require("../assets/images/fonts/PlusJakartaSans.ttf"),
    PlayfairDisplay: require("../assets/images/fonts/PlayfairDisplay.ttf"),
  });

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);
  useEffect(() => {
    Animated.parallel([
      Animated.parallel([
        Animated.timing(logoAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacityAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.delay(200), // Delay before starting the title and subtitle animations
        Animated.parallel([
          Animated.timing(titleAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(titleOpacityAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        Animated.delay(200), // Delay before starting the subtitle animation
        Animated.timing(subtitleOpacityAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.delay(200), // Delay before starting the loading animation
        Animated.parallel([
          Animated.timing(loadingScaleAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(loadingOpacityAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]).start();
  }, []);

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
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
            style={{
              transform: [{ translateY: logoAnim }],
              opacity: logoOpacityAnim,
            }}
            className="flex-row justify-center items-center mt-20"
          >
            <View className="w-12 h-12 rounded-xl bg-orange-700 items-center justify-center">
              <Ionicons name="home-outline" size={24} color="white" />
            </View>
            <Text className="ml-2 text-2xl font-bold tracking-[0.18em] text-white font-regular">
              NESTLUX
            </Text>
          </Animated.View>

          <View className="absolute bottom-16 w-full px-8">
            <Animated.View
              style={{
                transform: [{ translateY: titleAnim }],
                opacity: titleOpacityAnim,
              }}
            >
              <Text className="text-white text-5xl text-center font-heading">
                Find Your Dream Home
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: subtitleOpacityAnim,
              }}
            >
              <Text className="text-light-300 text-center mt-4 text-lg font-regular">
                Extraordinary properties curated for redefined living
              </Text>
            </Animated.View>
            <Animated.View
              className="mt-8 flex-row justify-center items-center"
              style={{
                transform: [{ scaleX: loadingOpacityAnim }],
                opacity: loadingOpacityAnim,
              }}
            >
              <View className="w-9 h-2 rounded-xl bg-orange-700 " />
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
