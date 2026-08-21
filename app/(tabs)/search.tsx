import SearchScreen from "@/src/features/search/screens/SearchScreen";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <SearchScreen />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
