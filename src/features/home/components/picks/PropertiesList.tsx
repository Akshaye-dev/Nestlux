import { Icons } from "@/src/shared/assets/icons";
import { AppColors } from "@/src/shared/constants/colors";
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
import { Property } from "../../models/domain/Property";
type PropertiesListProps = {
  data: Property[];
};

const PropertiesList = ({ data }: PropertiesListProps) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      scrollEnabled={false}
      columnWrapperStyle={{
        gap: 12,
        marginBottom: 24,
      }}

      className="mt-2"
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="flex-1 rounded-3xl overflow-hidden bg-gray-100 elevation-sm">
          <ImageBackground className="h-44" source={item.image}>
            <View className="flex-row justify-between items-center p-2">
              <View className="bg-accent rounded-3xl px-2 items-center justify-center">
                <Text className="text-xs text-white font-plus-jakarta-sans-semi-bold">
                  Featured
                </Text>
              </View>
              <View className="items-center justify-center px-2 py-1">
                <View className="w-7 h-7 rounded-full bg-white absolute" />
                <Ionicons
                  name={item.isFavorite ? "heart" : "heart-outline"}
                  size={16}
                  color={item.isFavorite ? "red" : AppColors.gray[700]}
                />
              </View>
            </View>
            <View className="flex-row items-center px-2 py-1 bg-white rounded-3xl absolute bottom-2 ml-2">
              <Image source={Icons.startIcon} className="size-4" />
              <Text className="text-xs text-gray-700 ml-1 font-plus-jakarta-sans-semi-bold">
                {item.rating}
              </Text>
              <Text className="text-xs text-gray-600 ml-1 font-plus-jakarta-sans">
                (38)
              </Text>
            </View>
          </ImageBackground>
          <View className=" bg-gray-100 mx-2">
            <View className="flex-row justify-between mt-2">
              <Text className="w-1/2 text-base text-black font-plus-jakarta-sans-semi-bold">
                {item.title}
              </Text>
              <Text className="text-base text-accent font-plus-jakarta-sans-semi-bold">
                {item.price}
              </Text>
            </View>
            <View className="flex-row items-center mt-1">
              <Ionicons name="location" size={12} color={AppColors.gray[500]} />
              <Text className="text-xs text-gray-500 font-plus-jakarta-sans ml-1">
                {item.location}
              </Text>
            </View>
            <View className=" h-[1.2px] bg-gray-300 my-2" />
            <View className="flex-row justify-between items-center mb-2">
              <View className="flex-row items-center">
                <Ionicons
                  name="bed-outline"
                  size={12}
                  color={AppColors.accent}
                />
                <View className="justify-center items-start">
                  <Text className="text-xs text-gray-500 font-plus-jakarta-sans ml-1">
                    3
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
                    4
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
                    3
                  </Text>
                  <Text className="text-xs text-gray-500 font-plus-jakarta-sans ml-1">
                    ft²
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default PropertiesList;

const styles = StyleSheet.create({});
