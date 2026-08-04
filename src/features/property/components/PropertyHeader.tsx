import { Icons } from "@/src/shared/assets/icons";
import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PropertyHeader = () => {
  return (
    <View className="px-4 mt-4">
      <View className="flex-row justify-between items-center py-1">
        <Text className="text-xl text-black font-plus-jakarta-sans-semi-bold">
          Skyline Penthouse
        </Text>
        <Text className="text-xl text-accent font-plus-jakarta-sans-semi-bold">
          $3.89M
        </Text>
      </View>
      <View className="flex-row  items-center py-1 gap-1">
        <Ionicons name="location-outline" size={14} color={AppColors.accent} />
        <Text className="text-sm text-gray-600 font-plus-jakarta-sans">
          123 Main Street, New York, NY 10001
        </Text>
      </View>
      <View className="flex-row items-center py-1 gap-4 mt-2">
        <View className="flex-row gap-1 px-3 py-1 bg-accentLight rounded-2xl">
          <Image source={Icons.startIcon} className="w-3 h-3" />
          <Text className="text-xs text-black font-plus-jakarta-sans-semi-bold">
            4.8
          </Text>
          <Text className="text-xs text-gray-600 font-plus-jakarta-sans-semi">
            (52 reviews)
          </Text>
        </View>
        <View className="flex-row gap-1 px-3 py-1 bg-gray-200 rounded-2xl">
          <Text className="text-xs text-black font-plus-jakarta-sans-semi-bold">
            New Build
          </Text>
        </View>
      </View>
      <View className="h-[0.5px] bg-gray-200 my-4" />
      <View className="flex-row justify-between items-center bg-gray-50 border border-gray-200 rounded-2xl py-3 px-1">
        <View className="flex-1 items-center">
          <Ionicons name="bed-outline" size={14} color={AppColors.accent} />
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold">
            3
          </Text>
          <Text className="text-xs text-gray-600 font-plus-jakarta-sans">
            Bedrooms
          </Text>
        </View>
        <View className="w-[0.5px] h-full bg-gray-300 " />
        <View className="flex-1 items-center">
          <Ionicons name="water-outline" size={14} color={AppColors.accent} />
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold">
            3
          </Text>
          <Text className="text-xs text-gray-600 font-plus-jakarta-sans">
            Bathrooms
          </Text>
        </View>
        <View className="w-[0.5px] h-full bg-gray-300 " />
        <View className="flex-1 items-center">
          <Ionicons name="resize-outline" size={14} color={AppColors.accent} />
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold">
            3.2K
          </Text>
          <Text className="text-xs text-gray-600 font-plus-jakarta-sans">
            Sq.Ft
          </Text>
        </View>
        <View className="w-[0.5px] h-full bg-gray-300 " />
        <View className="flex-1 items-center">
          <Ionicons
            name="business-outline"
            size={14}
            color={AppColors.accent}
          />
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold">
            Apartment
          </Text>
          <Text className="text-xs text-gray-600 font-plus-jakarta-sans">
            Type
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyHeader;

const styles = StyleSheet.create({});
