import { Icons } from "@/src/shared/assets/icons";
import { AppStrings } from "@/src/shared/constants/strings";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Property } from "../models/domain/Property";

const FeaturedProperties = ({ properties }: { properties: Property[] }) => {
  return (
    <View className="mt-4 w-full justify-between items-center">
      <View className="flex-row w-full justify-between items-center">
        <Text className="text-lg font-plus-jakarta-sans-semi-bold">
          {AppStrings.home.featuredProperties}
        </Text>
        <Text className="text-sm font-plus-jakarta-sans-semi-bold text-accent">
          {AppStrings.home.seeAll}
        </Text>
      </View>

      <FlatList
        data={properties}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-2"
        renderItem={({ item }) => (
          <View className="w-72 h-52 mr-4">
            <ImageBackground
              source={item.image}
              className="w-full h-full rounded-3xl overflow-hidden"
            >
              <View className="flex-row justify-between items-center p-2">
                {item.isFeatured && (
                  <View className="bg-accent rounded-3xl px-2 items-center justify-center">
                    <Text className="text-sm text-white font-plus-jakarta-sans-semi-bold">
                      {AppStrings.home.featured}
                    </Text>
                  </View>
                )}

                <View className="items-center justify-center p-1 ">
                  <View className="w-8 h-8 rounded-full bg-input-background opacity-50 absolute" />
                  <Ionicons
                    name={item.isFavorite ? "heart" : "heart-outline"}
                    size={20}
                    color={item.isFavorite ? "red" : "white"}
                    className="opacity-100"
                  />
                </View>
              </View>

              <View className="flex-row align-bottom absolute bottom-0 w-full justify-between p-3 ">
                <View>
                  <Text className="text-lg font-plus-jakarta-sans-semi-bold text-white">
                    {item.title}
                  </Text>
                  <Text className="text-sm text-gray-200 font-plus-jakarta-sans">
                    {item.location}
                  </Text>
                </View>
                <View className="items-end">
                  <Text className="text-lg text-white font-plus-jakarta-sans-semi-bold">
                    {item.price}
                  </Text>
                  <View className="flex-row items-center">
                    <Image source={Icons.startIcon} className="size-4" />
                    <Text className="text-sm text-gray-200 ml-1 font-plus-jakarta-sans">
                      {item.rating}
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FeaturedProperties;

const styles = StyleSheet.create({});
