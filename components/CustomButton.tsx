import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type CustomButtonProps = {
  buttonText?: string;
  icon?: ImageSourcePropType;
  color?: string;
  textColor?: string;
};
const CustomButton = ({
  buttonText,
  icon,
  color,
  textColor,
}: CustomButtonProps) => {
  return (
    <View
      className={`flex-row w-full h-14 ${color} rounded-3xl items-center justify-center elevation-md mt-4`}
    >
      {icon && <Image source={icon} className="w-6 h-6 mr-2" />}
      <Text className={`${textColor} text-xl font-semibold`}>{buttonText}</Text>
    </View>
  );
};

export default CustomButton;
