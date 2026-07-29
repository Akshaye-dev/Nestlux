import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
export const NotificationIcon = ({ hasUnread }: { hasUnread?: boolean }) => {
  return (
    <View className="rounded-full p-2 bg-gray-100 mb-2">
      <Ionicons name="notifications-outline" size={16} color="black" />
      {hasUnread && (
        <View className="absolute top-1 right-2 w-2 h-2 rounded-full bg-red-600" />
      )}
    </View>
  );
};
