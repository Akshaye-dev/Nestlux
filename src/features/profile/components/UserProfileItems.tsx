import { AppColors } from "@/src/shared/constants/colors";
import { AppStrings } from "@/src/shared/constants/strings";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import ProfileItemCard from "./ProfileItemCard";

const UserProfileItems = () => {
  return (
    <View className="flex-row justify-between mt-4 gap-6 mx-4">
      <ProfileItemCard
        icon={<Ionicons name="business" size={16} color={AppColors.accent} />}
        title="24"
        subTitle={AppStrings.profile.listings}
      />
      <ProfileItemCard
        icon={<Ionicons name="heart" size={16} color="red" />}
        title="18"
        subTitle={AppStrings.profile.saved}
      />
      <ProfileItemCard
        icon={<Ionicons name="star" size={16} color={AppColors.rating} />}
        title="4.9"
        subTitle={AppStrings.profile.reviews}
      />
    </View>
  );
};

export default UserProfileItems;
