import PropertyCard from "@/src/shared/components/PropertyCard";
import { usePropertyNavigation } from "@/src/shared/hooks/usePropertyNavigation";
import React from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { Property } from "../../home/models/domain/Property";

const SearchList = ({
  propertiesData,
  viewMode,
}: {
  propertiesData: Property[];
  viewMode: string;
}) => {
  const { openedProperty } = usePropertyNavigation();
  const isGrid = viewMode === "grid";

  const propertyPressedHandler = (property: Property) => {
    openedProperty(property);
  };

  return (
    <FlatList
      key={isGrid ? "grid" : "list"}
      data={propertiesData}
      numColumns={isGrid ? 2 : 1}
      columnWrapperStyle={
        isGrid
          ? {
              gap: 12,
              marginBottom: 24,
            }
          : undefined
      }

      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
      renderItem={({ item }) => (
        <View style={isGrid ? styles.gridItem : styles.listItem}>
          <Pressable
            onPress={() => {
              propertyPressedHandler(item);
            }}
            android_ripple={{ color: "#D1D5DB", foreground: true }}
            className="rounded-3xl elevation-sm overflow-hidden"
          >
            <PropertyCard property={item} />
          </Pressable>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default SearchList;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
  },
  listItem: {
    marginBottom: 16,
  },
});
