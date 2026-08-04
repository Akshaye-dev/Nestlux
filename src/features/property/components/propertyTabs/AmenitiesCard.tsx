import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type AmenitiesCardProps = {
  name: string;
  icon: string;
};

const AmenitiesCard = ({ name, icon }: AmenitiesCardProps) => {
  return (
    <View className="flex-row p-4 bg-gray-50 rounded-2xl gap-2 border border-gray-200 items-center">
      <Ionicons name="checkmark-circle-outline" size={20} color={"#4CAF50"} />
      <Text className="text-base text-black font-plus-jakarta-sans-semi-bold">
        {name}
      </Text>
    </View>
  );
};

export default AmenitiesCard;

const styles = StyleSheet.create({});
