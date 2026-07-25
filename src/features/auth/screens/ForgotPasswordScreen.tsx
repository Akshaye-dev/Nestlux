import CustomButton from "@/src/shared/components/CustomButton";
import InputText from "@/src/shared/components/InputText";
import { AppColors } from "@/src/shared/constants/colors";
import { AppStrings } from "@/src/shared/constants/strings";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white items-center px-8 ">
      <View className="flex-row  justify-start items-center w-full py-4">
        <View className="p-2 rounded-full bg-surfaceSecondary items-center justify-center">
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={AppColors.surface}
          />
        </View>
        <View className="w-14 h-2 rounded-full bg-surface ml-2" />
        <View className="w-2 h-2 rounded-full bg-light-300 ml-2" />
        <View className="w-2 h-2 rounded-full bg-light-300 ml-2" />
      </View>

      <View className="mt-16 bg-surfaceSecondary p-4 rounded-3xl">
        <Ionicons name="mail-outline" size={70} color={AppColors.surface} />
      </View>
      <Text className="text-black  text-3xl font-PlusJakartaSansSemiBold mt-6 ">
        {AppStrings.forgotPassword.forgotPasswordText}
      </Text>
      <Text className="text-base font-PlusJakartaSans text-textSecondary mt-1 mb-4 text-center">
        {AppStrings.forgotPassword.description}
      </Text>

      <Text className="text-base text-black font-PlusJakartaSansSemiBold  mt-4 mb-1 text-left w-full">
        {AppStrings.forgotPassword.emailLabel}
      </Text>
      <InputText
        placeholder={AppStrings.forgotPassword.emailPlaceholder}
        secureTextEntry={false}
      />

      <CustomButton
        buttonText={AppStrings.forgotPassword.sendCode}
        color="bg-surface"
        textColor="text-white"
      />
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
