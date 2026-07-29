import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

type PicksCategoriesProps = {
  propertyTypes: {
    id: string;
    title: string;
    icon: string;
  }[];
  onPress: (categoryId: string) => void;
};

const PicksCategoryList = ({
  propertyTypes,
  onPress,
}: PicksCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <FlatList
      data={propertyTypes}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const selected = selectedCategory === item.id;
        return (
          <Pressable
            onPress={() => {
              setSelectedCategory(item.id);
              onPress(item.id);
            }}
            className=" mr-2"
          >
            {selected ? (
              <View className="flex-row items-center justify-center bg-accent border border-accent px-3 rounded-3xl py-1 ">
                <Ionicons name={item.icon} size={14} color={AppColors.white} />
                <Text className="text-white text-sm ml-2 font-plus-jakarta-sans ">
                  {item.title}
                </Text>
              </View>
            ) : (
              <View className="flex-row items-center justify-center bg-white rounded-3xl border border-gray-500 px-3 py-1 ">
                <Ionicons
                  name={item.icon}
                  size={14}
                  color={AppColors.gray[500]}
                />
                <Text className="text-gray-500 text-sm ml-2 font-plus-jakarta-sans">
                  {item.title}
                </Text>
              </View>
            )}
          </Pressable>
        );
      }}
    />
  );
};

export default PicksCategoryList;
