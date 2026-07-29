import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";

type SearchProps = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};

const Search = ({
  placeholder,
  onChangeText,
  value,
  keyboardType,
  secureTextEntry,
}: SearchProps) => {
  return (
    <View className="flex-row justify-between items-center w-full bg-gray-100 rounded-3xl p-2 border border-gray-500">
      <Ionicons
        name="search"
        size={20}
        color={AppColors.input.icon}
        className="ml-2"
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={AppColors.input.text}
        multiline={false}
        className="flex-1 text-black text-lg font-PlusJakartaSans ml-2"
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
      />
      <View className="rounded-full p-1 bg-accent mr-2">
        <Ionicons name="options" size={24} color="white" />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
