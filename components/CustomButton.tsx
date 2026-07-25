import React from "react";
import { Image, ImageSourcePropType, Pressable, Text } from "react-native";

type CustomButtonProps = {
  buttonText?: string;
  icon?: ImageSourcePropType;
  color?: string;
  textColor?: string;
  isDisabled?: boolean;
  onPress?: () => void;
};
const CustomButton = ({
  buttonText,
  icon,
  color,
  textColor,
  onPress,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <Pressable
      className={`flex-row w-full h-14 ${color} rounded-3xl items-center justify-center elevation-md mt-4`}
      onPress={onPress}
      disabled={isDisabled}
    >
      {icon && <Image source={icon} className="w-6 h-6 mr-2" />}
      <Text className={`${textColor} text-xl font-semibold`}>{buttonText}</Text>
    </Pressable>
  );
};

export default CustomButton;
