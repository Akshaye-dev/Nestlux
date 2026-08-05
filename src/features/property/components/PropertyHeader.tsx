import { Icons } from "@/src/shared/assets/icons";
import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Property } from "../../home/models/domain/Property";
import { formatPrice } from "../../home/utils/formatPrice";
import { listingColors } from "../../home/utils/listingColors";

const PropertyHeader = ({ property }: { property: Property }) => {
  return (
    <View className="px-4 mt-4">
      <View className="flex-row justify-between items-center py-1">
        <Text className="text-xl text-black font-plus-jakarta-sans-semi-bold">
          {property.title}
        </Text>
        <Text className="text-xl text-accent font-plus-jakarta-sans-semi-bold">
          {formatPrice(property.price)}
        </Text>
      </View>
      <View className="flex-row  items-center py-1 gap-1">
        <Ionicons name="location-outline" size={14} color={AppColors.accent} />
        <Text className="text-sm text-gray-600 font-plus-jakarta-sans">
          {property.city}, {property.state}
        </Text>
      </View>
      <View className="flex-row items-center py-1 gap-4 mt-2">
        <View className="flex-row gap-1 px-3 py-1 bg-accentLight rounded-2xl">
          <Image source={Icons.startIcon} className="w-3 h-3" />
          <Text className="text-xs text-black font-plus-jakarta-sans-semi-bold">
            {property.rating}
          </Text>
          <Text className="text-xs text-gray-600 font-plus-jakarta-sans-semi">
            ({property.noOfReviews} reviews)
          </Text>
        </View>
        <View
          className="flex-row gap-1 px-3 py-1 bg-gray-200 rounded-2xl"
          style={{
            backgroundColor:
              listingColors[property.propertyType] || AppColors.gray[500],
          }}
        >
          <Text className="text-xs text-white font-plus-jakarta-sans-semi-bold">
            {property.propertyType}
          </Text>
        </View>
      </View>
      <View className="h-[0.5px] bg-gray-200 my-4" />
      <View className="flex-row justify-between items-center bg-gray-50 border border-gray-200 rounded-2xl py-3 px-1">
        <View className="flex-1 items-center">
          <Ionicons name="bed-outline" size={14} color={AppColors.accent} />
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold">
            {property.noOfBedrooms}
          </Text>
          <Text className="text-xs text-gray-600 font-plus-jakarta-sans">
            Bedrooms
          </Text>
        </View>
        <View className="w-[0.5px] h-full bg-gray-300 " />
        <View className="flex-1 items-center">
          <Ionicons name="water-outline" size={14} color={AppColors.accent} />
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold">
            {property.noOfBathrooms}
          </Text>
          <Text className="text-xs text-gray-600 font-plus-jakarta-sans">
            Bathrooms
          </Text>
        </View>
        <View className="w-[0.5px] h-full bg-gray-300 " />
        <View className="flex-1 items-center">
          <Ionicons name="resize-outline" size={14} color={AppColors.accent} />
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold">
            {property.areaSqFt}
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
            {property.category.charAt(0).toUpperCase() +
              property.category.slice(1)}
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
