import { Images } from "@/src/shared/assets/images";
import { NotificationIcon } from "@/src/shared/components/NotificationIcon";
import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View className="flex-row justify-between items-center mb-4 mt-4">
      <View className="justify-between items-start">
        <View className="flex-row items-center gap-1">
          <Text className="text-xs font-plus-jakarta-sans-semi-bold text-gray-500">
            Good morning
          </Text>
          <Ionicons name="sunny" size={16} color={AppColors.yellow[300]} />
        </View>
        <Text className="text-lg text-black font-plus-jakarta-sans-semi-bold">
          Sarah Mitchell
        </Text>
      </View>
      <View className="flex-row  items-center gap-2">
        <NotificationIcon hasUnread={true} />
        <Image source={Images.background} className="w-12 h-12 rounded-full" />
      </View>
    </View>
  );
};

export default Header;
