import React from "react";
import { Text, View } from "react-native";
import { useProperties } from "../../hooks/useProperties";
import { propertyCategories } from "../../mocks/propertyCategories";
import { PropertyCardSkeleton } from "../skeleton/PicksPropertyCardSkeleton";
import PicksCategoryList from "./PicksCategoryList";
import PropertiesList from "./PicksPropertiesList";

const propertyTypes = propertyCategories;
const Picks = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const {
    propertiesData,
    loading,
    loadingMore,
    hasMore,
    loadMore,
    error,
    isFetching,
  } = useProperties({ featured: false, limit: 15, type: selectedCategory });

  if (loading && propertiesData.length === 0) {
    return <PropertyCardSkeleton />;
  }

  const endReachedHandler = () => {
    if (hasMore && !loadingMore) {
      loadMore();
    }
  };
  return (
    <View className="mt-12">
      <PicksCategoryList
        propertyTypes={propertyTypes}
        isFetching={isFetching}
        onPress={(categoryId) => setSelectedCategory(categoryId)}
      />
      <View className="flex-row justify-between items-center mt-4">
        <Text className="text-lg font-plus-jakarta-sans-semi-bold text-black">
          {selectedCategory.at(0)?.toUpperCase() + selectedCategory.slice(1)}{" "}
          Properties
        </Text>
        <Text className="text-sm font-plus-jakarta-sans text-gray-500">
          {propertiesData.length} results
        </Text>
      </View>
      <PropertiesList
        data={propertiesData}
        onListEndReached={endReachedHandler}
      />
    </View>
  );
};

export default Picks;
