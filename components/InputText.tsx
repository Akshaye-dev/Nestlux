import { AppColors } from "@/constants/colors";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  TextInput,
  View,
} from "react-native";

type InputTextProps = {
  placeholder?: string;
  icon?: ImageSourcePropType;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};

const InputText = ({
  placeholder,
  icon,
  keyboardType,
  secureTextEntry,
}: InputTextProps) => {
  return (
    <View className="flex-row justify-between items-center w-full h-12 bg-input-background rounded-3xl px-4">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={AppColors.input.text}
        multiline={false}
        className="flex-1 text-black text-lg font-PlusJakartaSans"
        onChangeText={() => {}}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {icon && (
        <Image source={icon} className="w-6 h-6 p-2" resizeMode="contain" />
      )}
    </View>
  );
};

export default InputText;
