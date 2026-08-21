import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SearchListHeader = ({
  propertyCount,
  onLayoutTypePress,
  setPriceSort,
}: {
  propertyCount: number;
  onLayoutTypePress: (viewMode: string) => void;
  setPriceSort: (sortOrder: "asc" | "desc") => void;
}) => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const layoutPressHandler = (viewMode: string) => {
    setViewMode(viewMode);
    onLayoutTypePress(viewMode);
  };
  return (
    <View className="pb-4">
      <View className="h-[0.5px] bg-gray-200 my-4" />
      <View className="flex-row items-center justify-between">
        <View className="flex-row">
          <Text className="text-black text-sm font-plus-jakarta-sans-semi-bold">
            {propertyCount}
          </Text>
          <Text className="text-gray-600 text-sm font-plus-jakarta-sans-semi ml-1">
            Properties found
          </Text>
        </View>
        <View className="flex-row gap-2 items-center">
          <Pressable
            onPress={() => {
              setSortOrder("asc");
              setPriceSort("asc");
            }}
          >
            <View className="flex-row items-center">
              <Text
                className={`${sortOrder === "asc" ? "text-accent" : "text-gray-600"} text-sm font-plus-jakarta-sans-semi mr-1`}
              >
                Price
              </Text>
              <Ionicons
                name="arrow-up-circle-outline"
                size={14}
                color={
                  sortOrder === "asc" ? AppColors.accent : AppColors.gray[600]
                }
              />
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              setSortOrder("desc");
              setPriceSort("desc");
            }}
          >
            <View className="flex-row items-center">
              <Text
                className={`${sortOrder === "desc" ? "text-accent" : "text-gray-600"} text-sm font-plus-jakarta-sans-semi mr-1`}
              >
                Price
              </Text>
              <Ionicons
                name="arrow-down-circle-outline"
                size={14}
                color={
                  sortOrder === "desc" ? AppColors.accent : AppColors.gray[600]
                }
              />
            </View>
          </Pressable>
          <View className="flex-row  rounded-3xl ml-2 items-center  ">
            <Pressable onPress={() => layoutPressHandler("grid")}>
              <View
                className={`px-2 py-1 ${viewMode === "grid" ? "bg-accent border border-accent" : "bg-white border border-gray-200"} rounded-l-3xl`}
              >
                <Ionicons
                  name="grid-outline"
                  size={13}
                  color={
                    viewMode === "grid" ? AppColors.white : AppColors.gray[600]
                  }
                />
              </View>
            </Pressable>
            <Pressable onPress={() => layoutPressHandler("list")}>
              <View
                className={`px-2 py-1 ${viewMode === "list" ? "bg-accent border border-accent" : "bg-white border border-gray-200"} rounded-r-3xl`}
              >
                <Ionicons
                  name="list"
                  size={13}
                  color={
                    viewMode === "list" ? AppColors.white : AppColors.gray[600]
                  }
                />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchListHeader;

const styles = StyleSheet.create({});
