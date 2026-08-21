import { Images } from "@/src/shared/assets/images";
import { AppColors } from "@/src/shared/constants/colors";
import { AppStrings } from "@/src/shared/constants/strings";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProfileHeader = () => {
  const [cardHeight, setCardHeight] = useState(0);
  return (
    <View className="relative" style={{ marginBottom: -(cardHeight / 2) }}>
      <View className=" bg-accent h-32 rounded-b-3xl">
        <View className="bg-accentLight h-20 w-20 opacity-15 rounded-full absolute top-4 ml-6 " />
        <View className="flex-row  mx-4 justify-between items-center mt-4">
          <Text className="text-accentLight text-xl font-plus-jakarta-sans-semi-bold ">
            {AppStrings.profile.profile}
          </Text>
          <View className="items-center justify-center mr-2">
            <View className="bg-accentLight opacity-15 p-2 size-8 absolute rounded-full  " />
            <Ionicons
              name="create-outline"
              size={14}
              color="#F5F5F5"
              className="ml-1"
            />
          </View>
        </View>
      </View>
      <View className="bg-accentLight h-36 w-36 opacity-15 rounded-full absolute -top-16 -right-8 " />
      <Ionicons name="pencil" size={14} color="#F5F5F5" className="ml-2" />
      <View
        onLayout={(e) => setCardHeight(e.nativeEvent.layout.height)}
        className="flex-row bg-white  py-4 px-2 mx-4 rounded-2xl elevation-md items-center"
        style={{
          transform: [
            {
              translateY: -(cardHeight / 2),
            },
          ],
        }}
      >
        <View>
          <Image source={Images.background} className="w-16 h-16 rounded-2xl" />
          <View className="bg-accent rounded-full p-1 absolute -bottom-1 -right-1 justify-center  items-center">
            <Ionicons name="camera" size={9} color={AppColors.white} />
          </View>
        </View>
        <View className="ml-4 justify-center">
          <Text className="text-black text-lg font-plus-jakarta-sans-semi-bold">
            {AppStrings.profile.name}
          </Text>
          <Text className="text-gray-600 text-sm font-plus-jakarta-sans-semi">
            {AppStrings.profile.email}
          </Text>
          <View className="flex-row items-center justify-start">
            <Ionicons
              name="checkmark-circle"
              size={14}
              color="#00BFA6"
              className="mr-1"
            />
            <Text className="text-accent text-sm font-plus-jakarta-sans-semi">
              {AppStrings.profile.verified}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
