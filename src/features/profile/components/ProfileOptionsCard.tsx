import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
type ProfileOptionsCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  roundedTop?: boolean;
  roundedBottom?: boolean;
};

const ProfileOptionsCard = ({
  icon,
  title,
  description,
  roundedTop,
  roundedBottom,
}: ProfileOptionsCardProps) => {
  return (
    <Pressable
      android_ripple={{ color: AppColors.ripple, foreground: true }}
      className={`overflow-hidden ${roundedTop ? "rounded-t-2xl" : ""} ${
        roundedBottom ? "rounded-b-2xl" : ""
      }`}
    >
      <View
        className={`flex-row bg-gray-50 border border-gray-200 py-4 px-4 items-center justify-between ${roundedTop ? "rounded-t-2xl" : ""} ${roundedBottom ? "rounded-b-2xl" : ""}`}
      >
        <View className="flex-row items-center gap-4">
          <View className="bg-accentLight p-2 rounded-full">{icon}</View>
          <View>
            <Text className="text-black text-base font-plus-jakarta-sans-semi-bold">
              {title}
            </Text>
            <Text className="text-gray-600 text-sm font-plus-jakarta-sans">
              {description}
            </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={16} color="gray" />
      </View>
    </Pressable>
  );
};

export default ProfileOptionsCard;

const styles = StyleSheet.create({});
