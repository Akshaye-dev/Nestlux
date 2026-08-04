import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { KeyboardTypeOptions, Pressable, TextInput, View } from "react-native";

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
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push("/search");
      }}
    >
      <View className="flex-row justify-between items-center w-full bg-gray-50 rounded-3xl p-2 border border-gray-500">
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
          className="flex-1 text-black text-lg font-plus-jakarta-sans gap-2"
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          value={value}
          editable={false}
        />

        <View className="rounded-full p-1 bg-accent mr-2">
          <Ionicons name="options" size={24} color="white" />
        </View>
      </View>
    </Pressable>
  );
};

export default Search;
