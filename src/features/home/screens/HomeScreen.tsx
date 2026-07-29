import Search from "@/src/shared/components/Search";
import { AppStrings } from "@/src/shared/constants/strings";
import React from "react";
import { ScrollView, View } from "react-native";
import FeaturedProperties from "../components/FeaturedProperties";
import Header from "../components/Header";
import Picks from "../components/picks/Picks";
import { useProperties } from "../hooks/useProperties";

const HomeScreen = () => {
  const { properties, loading, error } = useProperties();
  const featuredProperties = properties.filter(
    (property) => property.isFeatured,
  );
  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-4 py-2 ">
        <Header />
        <Search placeholder={AppStrings.search.placeholder} />
        <FeaturedProperties properties={featuredProperties} />
        <Picks />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
