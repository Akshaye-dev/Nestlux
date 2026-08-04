import React from "react";
import { StyleSheet, Text, View } from "react-native";

type PropertyDetailsCardProps = {
  type: string;
  value: string;
  topRounded?: boolean;
  bottomRounded?: boolean;
};
const PropertyDetailsCard = ({
  type,
  value,
  topRounded,
  bottomRounded,
}: PropertyDetailsCardProps) => {
  return (
    <View
      className={`flex-row p-3 bg-gray-50 justify-between items-center border border-gray-200 ${topRounded ? "rounded-t-2xl" : ""} ${bottomRounded ? "rounded-b-2xl" : ""}`}
    >
      <Text className="text-gray-600 font-plus-jakarta-sans text-sm">
        {type}
      </Text>
      <Text className="text-black font-plus-jakarta-sans-semi-bold text-sm">
        {value}
      </Text>
    </View>
  );
};

export default PropertyDetailsCard;

const styles = StyleSheet.create({});
