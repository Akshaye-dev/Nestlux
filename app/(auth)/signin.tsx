import CustomButton from "@/components/CustomButton";
import InputText from "@/components/InputText";
import { AppStrings } from "@/constants/strings";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Signin = () => {
  return (
    <View className="flex-1 bg-white">
      <ImageBackground
        source={require("../../assets/images/bg-image.jpg")}
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
      <ScrollView className="flex-[3] rounded-xl px-8 ">
        <Text className="text-black  text-4xl font-PlusJakartaSansSemiBold mt-6 ">
          {AppStrings.signup.welcome}
        </Text>
        <Text className="text-base font-PlusJakartaSans text-textSecondary mt-1 mb-4">
          {AppStrings.signup.description}
        </Text>
        <Text className="text-base text-black font-PlusJakartaSansSemiBold  mt-4 mb-1">
          {AppStrings.signup.emailLabel}
        </Text>
        <InputText
          placeholder={AppStrings.signup.emailPlaceholder}
          secureTextEntry={false}
        />
        <Text className="text-base text-black font-PlusJakartaSansSemiBold  mt-4 mb-1">
          {AppStrings.signup.passwordLabel}
        </Text>
        <InputText
          placeholder={AppStrings.signup.passwordPlaceholder}
          icon={require("../../assets/icon/visibility-icon.png")}
          secureTextEntry={true}
        />
        <Text className="text-base font-PlusJakartaSansSemiBold text-surface self-end mt-4 mb-4">
          {AppStrings.signup.forgotPassword}
        </Text>
        <CustomButton
          buttonText={AppStrings.signup.signText}
          color="bg-surface"
          textColor="text-white"
        />
        <View className="flex-row items-center justify-center mt-6 mb-2">
          <View className="flex-1 h-[1px] bg-divider mt-2" />
          <Text className="text-textSecondary mx-2 text-base font-PlusJakartaSans">
            {AppStrings.signup.continueWith}
          </Text>
          <View className="flex-1 h-[1px] bg-divider mt-2" />
        </View>

        <CustomButton
          buttonText={AppStrings.signup.continueWithGoogle}
          icon={require("../../assets/icon/google-icon.png")}
          color="bg-white"
          textColor="text-black"
        />
        <View className="flex-row mt-8 justify-center items-center">
          <Text className="text-lg font-PlusJakartaSans text-textSecondary">
            {AppStrings.signup.signUpPrompt}
          </Text>
          <Text className="text-lg font-PlusJakartaSansSemiBold text-surface ml-1">
            {AppStrings.signup.signUpLink}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  //For Linear Gradient Overlay
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
});
