import React from "react";
import { Text, View } from "react-native";
import { mapProperty } from "../../mapper/propertyMapper";
import { mockPropertiesData } from "../../mocks/properties";
import { propertyCategories } from "../../mocks/propertyCategories";
import PicksCategoryList from "./PicksCategoryList";
import PropertiesList from "./PropertiesList";

const propertyTypes = propertyCategories;
const data = mockPropertiesData.map(mapProperty);
const Picks = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  return (
    <View className="mt-12">
      <PicksCategoryList
        propertyTypes={propertyTypes}
        onPress={(categoryId) => setSelectedCategory(categoryId)}
      />
      <View className="flex-row justify-between items-center mt-4">
        <Text className="text-lg font-plus-jakarta-sans-semi-bold text-black">
          {selectedCategory.at(0)?.toUpperCase() + selectedCategory.slice(1)}{" "}
          Properties
        </Text>
        <Text className="text-sm font-plus-jakarta-sans text-gray-500">
          {data.length} results
        </Text>
      </View>
      <PropertiesList data={data} />
    </View>
  );
};

export default Picks;
