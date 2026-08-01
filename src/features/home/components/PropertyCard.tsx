import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { Property } from "../models/domain/Property";
import { formatPrice } from "../utils/formatPrice";
import { listingColors } from "../utils/listingColors";

import { Icons } from "@/src/shared/assets/icons";

type PropertyCardProps = {
  property: Property;
};
const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Pressable
      onPress={() => {}}
      android_ripple={{ color: "#D1D5DB", foreground: true }}
      className="rounded-3xl overflow-hidden"
    >
      <View className=" bg-gray-100 elevation-sm">
        <ImageBackground className="h-44" source={{ uri: property.imageUrl }}>
          <View className="flex-row justify-between items-center p-2">
            <View
              className="rounded-3xl px-2 items-center justify-center"
              style={{
                backgroundColor:
                  listingColors[property.propertyType] || AppColors.gray[500],
              }}
            >
              {property.propertyType && (
                <Text className="text-xs text-white font-plus-jakarta-sans-semi-bold">
                  {property.propertyType}
                </Text>
              )}
            </View>
            <View className="items-center justify-center px-2 py-1">
              <View className="w-7 h-7 rounded-full bg-white absolute" />
              <Ionicons
                name={property.isFavorite ? "heart" : "heart-outline"}
                size={16}
                color={property.isFavorite ? "red" : AppColors.gray[700]}
              />
            </View>
          </View>
          <View className="flex-row items-center px-2 py-1 bg-white rounded-3xl absolute bottom-2 ml-2">
            <Image source={Icons.startIcon} className="size-4" />
            <Text className="text-xs text-gray-700 ml-1 font-plus-jakarta-sans-semi-bold">
              {property.rating}
            </Text>
            <Text className="text-xs text-gray-600 ml-1 font-plus-jakarta-sans">
              {"(" + property.noOfReviews + ")"}
            </Text>
          </View>
        </ImageBackground>
        <View className=" bg-gray-100 mx-2">
          <View className="flex-row justify-between mt-2">
            <Text
              className=" text-base text-black font-plus-jakarta-sans-semi-bold"
              numberOfLines={2}
              style={{ maxWidth: "50%" }} // Limit the width to 50% of the container
            >
              {property.title}
            </Text>
            <View>
              <Text className="text-base text-accent font-plus-jakarta-sans-semi-bold">
                {formatPrice(property.price)}
              </Text>
              <View className="items-center border border-gray-300 rounded-3xl px-1 py-1">
                <Text className="text-xs text-gray-500 font-plus-jakarta-sans-semi-bold">
                  {property.listingType}
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row items-center mt-1">
            <Ionicons name="location" size={12} color={AppColors.gray[500]} />
            <Text className="text-xs text-gray-500 font-plus-jakarta-sans ml-1">
              {property.location}
            </Text>
          </View>
          <View className=" h-[1.2px] bg-gray-300 my-2" />
          <View className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center">
              <Ionicons name="bed-outline" size={12} color={AppColors.accent} />
              <View className="justify-center items-start">
                <Text className="text-xs text-gray-500 font-plus-jakarta-sans ml-1">
                  {property.noOfBedrooms}
                </Text>
                <Text className="text-xs text-gray-500 font-plus-jakarta-sans ml-1">
                  Beds
                </Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <Ionicons
                name="water-outline"
                size={12}
                color={AppColors.accent}
              />
              <View className="justify-center items-start">
                <Text className="text-xs text-gray-500 font-plus-jakarta-sans ml-1">
                  {property.noOfBathrooms}
                </Text>
                <Text className="text-xs text-gray-500 font-plus-jakarta-sans ml-1">
                  Baths
                </Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <Ionicons
                name="resize-outline"
                size={12}
                color={AppColors.accent}
              />
              <View className="justify-center items-start">
                <Text className="text-xs text-gray-500 font-plus-jakarta-sans ml-1">
                  {property.areaSqFt}
                </Text>
                <Text className="text-xs text-gray-500 font-plus-jakarta-sans ml-1">
                  ft²
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default PropertyCard;
