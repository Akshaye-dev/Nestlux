import { Icons } from "@/src/shared/assets/icons";
import { Images } from "@/src/shared/assets/images";
import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AgentCard = () => {
  return (
    <View className="flex-row px-4 mt-8 bg-gray-50 border border-gray-200 rounded-2xl py-3 justify-between items-center">
      <Image source={Images.background} className="w-14 h-14 rounded-full" />
      <View className="flex-1 ml-2">
        <Text className="text-base text-black font-plus-jakarta-sans-semi-bold">
          John Doe
        </Text>
        <Text className="text-sm text-gray-600 font-plus-jakarta-sans">
          Real Estate Agent
        </Text>
        <View className="flex-row items-center ">
          <Image source={Icons.startIcon} className="w-3 h-3 " />
          <Text className="text-sm text-black font-plus-jakarta-sans-semi-bold ml-1">
            4.8
          </Text>
          <Text className="text-sm text-gray-600 font-plus-jakarta-sans">
            . 142 deals
          </Text>
        </View>
      </View>
      <View className="flex-1 flex-row items-end justify-center gap-2">
        <View className="bg-accentLight rounded-2xl px-3 py-1">
          <Ionicons name="call-outline" size={16} color={AppColors.accent} />
        </View>
        <View className="bg-accentLight rounded-2xl px-3 py-1">
          <Ionicons name="mail-outline" size={16} color={AppColors.accent} />
        </View>
      </View>
    </View>
  );
};

export default AgentCard;

const styles = StyleSheet.create({});
