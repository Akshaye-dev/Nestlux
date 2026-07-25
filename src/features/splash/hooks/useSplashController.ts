import { Fonts } from "@/src/shared/assets/fonts";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useMemo, useRef } from "react";
import { Animated } from "react-native";
SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding until fonts are loaded
const TIMING = {
  logo: 500,
  title: 500,
  subtitle: 500,
  loading: 500,
  delayBeforeLogo: 500,
  delayAfterLogo: 200,
  delayAfterTitle: 200,
  delayAfterSubtitle: 200,
};

type UseSplashControllerOptions = {
  onSplashFinished?: () => void;
};

export default function useSplashController(
  options?: UseSplashControllerOptions,
) {
  const onSplashFinished = options?.onSplashFinished;
  const logoAnim = useRef(new Animated.Value(-10)).current; //Float logo top to down animation
  const titleAnim = useRef(new Animated.Value(20)).current; //Float title down to top animation
  const logoOpacityAnim = useRef(new Animated.Value(0)).current; //Opacity animation for logo
  const titleOpacityAnim = useRef(new Animated.Value(0)).current; //Opacity animation for title and subtitle
  const subtitleOpacityAnim = useRef(new Animated.Value(0)).current; //Opacity animation for title and subtitle
  const loadingScaleAnim = useRef(new Animated.Value(0)).current; //Scale animation for loading screen
  const loadingOpacityAnim = useRef(new Animated.Value(0)).current; //Opacity animation for loading screen
  const [fontsLoaded, fontsError] = useFonts({
    PlusJakartaSans: Fonts.plusJakartaSans,
    PlayfairDisplay: Fonts.playfairDisplay,
    PlusJakartaSansSemiBold: Fonts.plusJakartaSansSemiBold,
  });
  const isReady = fontsLoaded || !!fontsError;
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");

    return () => {
      NavigationBar.setVisibilityAsync("visible"); // Make navigation bar visible again when the component unmounts or for next screen
    };
  }, []);

  useEffect(() => {
    const anim = Animated.sequence([
      Animated.delay(TIMING.delayBeforeLogo), // Delay before starting the logo animation
      Animated.parallel([
        Animated.timing(logoAnim, {
          toValue: 0,
          duration: TIMING.logo,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacityAnim, {
          toValue: 1,
          duration: TIMING.logo,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.delay(TIMING.delayAfterLogo), // Delay before starting the title and subtitle animations
        Animated.parallel([
          Animated.timing(titleAnim, {
            toValue: 0,
            duration: TIMING.title,
            useNativeDriver: true,
          }),
          Animated.timing(titleOpacityAnim, {
            toValue: 1,
            duration: TIMING.title,
            useNativeDriver: true,
          }),
        ]),
        Animated.delay(TIMING.delayAfterTitle), // Delay before starting the subtitle animation
        Animated.timing(subtitleOpacityAnim, {
          toValue: 1,
          duration: TIMING.subtitle,
          useNativeDriver: true,
        }),
        Animated.delay(TIMING.delayAfterSubtitle), // Delay before starting the loading animation
        Animated.parallel([
          Animated.timing(loadingScaleAnim, {
            toValue: 1,
            duration: TIMING.loading,
            useNativeDriver: true,
          }),
          Animated.timing(loadingOpacityAnim, {
            toValue: 1,
            duration: TIMING.loading,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]);
    anim.start(({ finished }) => {
      if (finished) {
        onSplashFinished?.();
      }
    });

    return () => {
      anim.stop();
    };
  }, [
    isReady,
    onSplashFinished,
    loadingOpacityAnim,
    loadingScaleAnim,
    logoAnim,
    logoOpacityAnim,
    subtitleOpacityAnim,
    titleAnim,
    titleOpacityAnim,
  ]);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  const animatedStyles = useMemo(
    () => ({
      logo: {
        transform: [{ translateY: logoAnim }],
        opacity: logoOpacityAnim,
      },
      title: {
        transform: [{ translateY: titleAnim }],
        opacity: titleOpacityAnim,
      },
      subtitle: {
        opacity: subtitleOpacityAnim,
      },
      loading: {
        transform: [{ scaleX: loadingScaleAnim }],
        opacity: loadingOpacityAnim,
      },
    }),
    [
      loadingOpacityAnim,
      loadingScaleAnim,
      logoAnim,
      logoOpacityAnim,
      subtitleOpacityAnim,
      titleAnim,
      titleOpacityAnim,
    ],
  );
  return { isReady, animatedStyles };
}
