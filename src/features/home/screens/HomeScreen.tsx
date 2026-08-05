import Search from "@/src/shared/components/Search";
import { AppColors } from "@/src/shared/constants/colors";
import { AppStrings } from "@/src/shared/constants/strings";
import { usePropertyNavigation } from "@/src/shared/hooks/usePropertyNavigation";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import FeaturedProperties from "../components/FeaturedProperties";
import Header from "../components/Header";
import PicksCategoryList from "../components/picks/PicksCategoryList";
import PropertyCard from "../components/PropertyCard";
import { PropertyCardSkeleton } from "../components/skeleton/PicksPropertyCardSkeleton";
import { useProperties } from "../hooks/useProperties";
import { usePropertyCount } from "../hooks/usePropertyCount";
import { propertyCategories } from "../mocks/propertyCategories";
import { Property } from "../models/domain/Property";

const propertyTypes = propertyCategories;
const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayCategory, setDisplayCategory] = useState("all");
  const [displayCount, setDisplayCount] = useState(0);
  const {
    propertiesData,
    loading,
    loadingMore,
    hasMore,
    loadMore,
    error,
    isFetching,
  } = useProperties({ featured: false, limit: 15, type: selectedCategory });
  const propertyCount = usePropertyCount(selectedCategory);
  const { openedProperty } = usePropertyNavigation();

  const propertyPressHandler = (property: Property) => {
    openedProperty(property);
  };
  useEffect(() => {
    if (!isFetching) {
      setDisplayCategory(selectedCategory);
      setDisplayCount(propertyCount);
    }
  }, [isFetching, selectedCategory, propertyCount]);
  return (
    <FlatList
      data={propertiesData}
      numColumns={2}
      columnWrapperStyle={{
        gap: 12,
        marginBottom: 24,
      }}
      className="px-4 py-2"
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <>
          <Header />
          <Search placeholder={AppStrings.search.placeholder} />
          <FeaturedProperties onPress={propertyPressHandler} />
          {loading && propertiesData.length === 0 ? (
            <PropertyCardSkeleton />
          ) : null}
          <PicksCategoryList
            propertyTypes={propertyTypes}
            isFetching={isFetching}
            onPress={(categoryId) => setSelectedCategory(categoryId)}
          />

          <View className="flex-row justify-between items-center mt-4">
            <Text className="text-lg font-plus-jakarta-sans-semi-bold text-black">
              {displayCategory.at(0)?.toUpperCase() + displayCategory.slice(1)}{" "}
              Properties
            </Text>
            <Text className="text-sm font-plus-jakarta-sans text-gray-500">
              {displayCount} results
            </Text>
          </View>
        </>
      }
      renderItem={({ item }) => (
        <View className="flex-1">
          <Pressable
            onPress={() => propertyPressHandler(item)}
            android_ripple={{ color: "#D1D5DB", foreground: true }}
            className="rounded-3xl overflow-hidden"
          >
            <PropertyCard property={item} />
          </Pressable>
        </View>
      )}
      onEndReached={() => {
        if (hasMore && !loadingMore) {
          loadMore();
        }
      }}
      onEndReachedThreshold={0.5} // Trigger loadMore when the user scrolls to 50% of the list
      ListFooterComponent={
        isFetching ? (
          <View className="flex-row justify-center items-center w-full py-4">
            <ActivityIndicator size="small" color={AppColors.accent} />
          </View>
        ) : null
      }
    />
  );
};

export default HomeScreen;
