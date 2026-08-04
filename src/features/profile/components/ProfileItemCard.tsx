import { AppColors } from "@/src/shared/constants/colors";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ProfileItemCardProps = {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
};

const ProfileItemCard = ({ icon, title, subTitle }: ProfileItemCardProps) => {
  return (
    <Pressable
      android_ripple={{ color: AppColors.ripple, foreground: true }}
      className="overflow-hidden rounded-2xl flex-1"
    >
      <View className=" bg-gray-50 border border-gray-200 py-2 px-4 rounded-2xl items-center">
        {icon}
        <Text className="text-black text-base font-plus-jakarta-sans-semi-bold">
          {title}
        </Text>
        <Text className="text-gray-600 text-xs font-plus-jakarta-sans">
          {subTitle}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProfileItemCard;

const styles = StyleSheet.create({});
