import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SignOutOption = () => {
  return (
    <Pressable
      android_ripple={{ color: AppColors.rippleLogout, foreground: true }}
      className="overflow-hidden rounded-2xl flex-1 mx-4 mt-6"
    >
      <View className="flex-1 flex-row rounded-2xl   items-center justify-center bg-white gap-2 p-4 border border-red-200">
        <Ionicons name="log-out-outline" size={20} color="red" />
        <Text className="text-red-500 text-base font-plus-jakarta-sans-semi-bold">
          Sign Out
        </Text>
      </View>
    </Pressable>
  );
};

export default SignOutOption;

const styles = StyleSheet.create({});
