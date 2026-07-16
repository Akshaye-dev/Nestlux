import AuthHeader from "@/components/AuthHeader";
import CustomButton from "@/components/CustomButton";
import InputText from "@/components/InputText";
import { AppStrings } from "@/constants/strings";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Signin = () => {
  return (
    <View className="flex-1 bg-white">
      <AuthHeader />

      <ScrollView
        className="flex-[3] rounded-xl px-8 "
        contentContainerClassName="pb-24"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-black  text-4xl font-PlusJakartaSansSemiBold mt-6 ">
          {AppStrings.signin.welcome}
        </Text>
        <Text className="text-base font-PlusJakartaSans text-textSecondary mt-1 mb-4">
          {AppStrings.signin.description}
        </Text>
        <Text className="text-base text-black font-PlusJakartaSansSemiBold  mt-4 mb-1">
          {AppStrings.signin.emailLabel}
        </Text>
        <InputText
          placeholder={AppStrings.signin.emailPlaceholder}
          secureTextEntry={false}
        />
        <Text className="text-base text-black font-PlusJakartaSansSemiBold  mt-4 mb-1">
          {AppStrings.signin.passwordLabel}
        </Text>
        <InputText
          placeholder={AppStrings.signin.passwordPlaceholder}
          icon={require("../../assets/icon/visibility-icon.png")}
          secureTextEntry={true}
        />
        <Link href="/forgotpassword" asChild>
          <Text className="text-base font-PlusJakartaSansSemiBold text-surface self-end mt-4 mb-4">
            {AppStrings.signin.forgotPassword}
          </Text>
        </Link>
        <CustomButton
          buttonText={AppStrings.signin.signText}
          color="bg-surface"
          textColor="text-white"
        />
        <View className="flex-row items-center justify-center mt-6 mb-2">
          <View className="flex-1 h-[1px] bg-divider mt-2" />
          <Text className="text-textSecondary mx-2 text-base font-PlusJakartaSans">
            {AppStrings.signin.continueWith}
          </Text>
          <View className="flex-1 h-[1px] bg-divider mt-2" />
        </View>

        <CustomButton
          buttonText={AppStrings.signin.continueWithGoogle}
          icon={require("../../assets/icon/google-icon.png")}
          color="bg-white"
          textColor="text-black"
        />
        <View className="flex-row mt-8 justify-center items-center">
          <Text className="text-lg font-PlusJakartaSans text-textSecondary">
            {AppStrings.signin.signUpPrompt}
          </Text>
          <Link href="/signup" asChild>
            <Text className="text-lg font-PlusJakartaSansSemiBold text-surface ml-1">
              {AppStrings.signin.signUpLink}
            </Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signin;
