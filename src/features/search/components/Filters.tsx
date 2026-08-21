import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
const propertyTypes = [
  { id: "all", title: "All" },
  { id: "Sale", title: "For Sale" },
  { id: "Rent", title: "For Rent" },
];

const Filters = ({
  isFetching,
  onPress,
  onPressFilter,
}: {
  isFetching: boolean;
  onPress: (type: string) => void;
  onPressFilter: () => void;
}) => {
  const [selectedType, setSelectedType] = useState("all");
  return (
    <View className="flex-row mt-6 justify-between items-center">
      <View className="flex-row">
        {propertyTypes.map((item) => {
          const selected = selectedType === item.id;
          return (
            <Pressable
              key={item.id}
              onPress={() => {
                setSelectedType(item.id);
                onPress(item.id);
              }}
              className="overflow-hidden rounded-3xl mr-2"
              android_ripple={{ color: "#E5E7EB", foreground: true }}
            >
              <View
                className={`${selectedType === item.id ? "bg-accent" : "bg-white"} flex-row rounded-3xl border border-gray-200 px-3 py-1 `}
              >
                <Text
                  className={`${selectedType === item.id ? "text-white" : "text-black"} text-sm font-plus-jakarta-sans`}
                >
                  {item.title}
                </Text>
                {isFetching && selected && (
                  <View className="ml-2">
                    <ActivityIndicator size="small" color={AppColors.white} />
                  </View>
                )}
              </View>
            </Pressable>
          );
        })}
      </View>
      <Pressable
        onPress={onPressFilter}
        className="overflow-hidden rounded-3xl mr-2"
        android_ripple={{ color: "#E5E7EB", foreground: true }}
      >
        <View className="px-2 py-1 border border-gray-200 rounded-3xl items-center justify-center">
          <Ionicons name="options" size={14} color={AppColors.gray[600]} />
        </View>
      </Pressable>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({});
