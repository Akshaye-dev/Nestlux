import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { KeyboardTypeOptions, Pressable, TextInput, View } from "react-native";

type InputTextProps = {
  placeholder?: string;
  icon?: React.ReactNode;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
  isPassword?: boolean;
  placeholderTextColor?: string;
  multiline?: boolean;
};

const InputText = ({
  placeholder,
  icon,
  keyboardType,
  onChangeText,
  value,
  isPassword = false,
  multiline,
  placeholderTextColor,
}: InputTextProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View className="flex-row justify-between items-center w-full h-12 bg-input-background rounded-3xl px-1">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        multiline={multiline ?? false}
        className="flex-1 text-black text-lg font-plus-jakarta-sans"
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={isPassword && !passwordVisible}
        value={value}
      />
      {isPassword && (
        <Pressable onPress={() => setPasswordVisible((prev) => !prev)}>
          {!passwordVisible ? (
            <Ionicons name="eye-off-outline" size={24} color="black" />
          ) : (
            <Ionicons name="eye-outline" size={24} color="black" />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default InputText;
