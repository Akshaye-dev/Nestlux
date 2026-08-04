import { AppColors } from "@/src/shared/constants/colors";
import { AppStrings } from "@/src/shared/constants/strings";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import ProfileOptionsCard from "./ProfileOptionsCard";

const ProfileOptions = () => {
  return (
    <View className="flex-1  mx-4 mt-6">
      <ProfileOptionsCard
        icon={
          <Ionicons name="person-outline" size={16} color={AppColors.accent} />
        }
        title={AppStrings.profile.personalInfo.title}
        description={AppStrings.profile.personalInfo.description}
        roundedTop={true}
      />
      <ProfileOptionsCard
        icon={
          <Ionicons
            name="notifications-circle-outline"
            size={16}
            color={AppColors.accent}
          />
        }
        title={AppStrings.profile.notifications.title}
        description={AppStrings.profile.notifications.description}
      />
      <ProfileOptionsCard
        icon={
          <Ionicons
            name="shield-checkmark-outline"
            size={16}
            color={AppColors.accent}
          />
        }
        title={AppStrings.profile.privacy.title}
        description={AppStrings.profile.privacy.description}
      />
      <ProfileOptionsCard
        icon={
          <Ionicons
            name="analytics-outline"
            size={16}
            color={AppColors.accent}
          />
        }
        title={AppStrings.profile.activity.title}
        description={AppStrings.profile.activity.description}
      />
      <ProfileOptionsCard
        icon={
          <Ionicons
            name="help-circle-outline"
            size={16}
            color={AppColors.accent}
          />
        }
        title={AppStrings.profile.help.title}
        description={AppStrings.profile.help.description}
      />
      <ProfileOptionsCard
        icon={
          <Ionicons
            name="settings-outline"
            size={16}
            color={AppColors.accent}
          />
        }
        title={AppStrings.profile.settings.title}
        description={AppStrings.profile.settings.description}
        roundedBottom={true}
      />
    </View>
  );
};

export default ProfileOptions;

const styles = StyleSheet.create({});
