import PropertyCard from "@/src/shared/components/PropertyCard";
import { AppColors } from "@/src/shared/constants/colors";
import { useProperties } from "@/src/shared/hooks/useProperties";
import { usePropertyNavigation } from "@/src/shared/hooks/usePropertyNavigation";
import { auth } from "@/src/shared/services/firebase/firebase";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { PropertyCardSkeleton } from "../../home/components/skeleton/PicksPropertyCardSkeleton";
import { Property } from "../../home/models/domain/Property";

const SavedScreen = () => {
  const userId = auth.currentUser?.uid;
  const { propertiesData, loading } = useProperties({
    featured: false,
    limit: 15,
    propertyType: "all",
  });
  const [viewMode, setViewMode] = useState("grid");
  const { openedProperty } = usePropertyNavigation();
  const isGrid = viewMode === "grid";

  const propertyPressedHandler = (property: Property) => {
    openedProperty(property);
  };

  const savedProperties = userId
    ? propertiesData.filter((property) => {
        // Safely force TypeScript to see favorites as a record map via 'unknown'
        const favoritesMap = property?.favorites;
        return favoritesMap?.[userId] === true;
      })
    : [];

  const layoutPressHandler = (viewMode: string) => {
    setViewMode(viewMode);
    //onLayoutTypePress(viewMode);
  };
  if (loading || savedProperties.length === 0) {
    return (
      <View className="flex-1 bg-white  p-4 justify-center items-center">
        <PropertyCardSkeleton />
      </View>
    );
  }
  return (
    <View className="flex-1 bg-white  p-4">
      <View className="flex-row justify-between bg-white">
        <View>
          <Text className="text-black text-lg font-plus-jakarta-sans-semi-bold ">
            Saved
          </Text>
          <Text className="text-gray-500 text-sm font-plus-jakarta-sans-semi ">
            {savedProperties.length} properties saved
          </Text>
        </View>
        <View className="flex-row  rounded-3xl ml-2 items-center  ">
          <Pressable onPress={() => layoutPressHandler("grid")}>
            <View
              className={`px-2 py-1 ${viewMode === "grid" ? "bg-accent border border-accent" : "bg-white border border-gray-200"} rounded-l-3xl`}
            >
              <Ionicons
                name="grid-outline"
                size={13}
                color={
                  viewMode === "grid" ? AppColors.white : AppColors.gray[600]
                }
              />
            </View>
          </Pressable>
          <Pressable onPress={() => layoutPressHandler("list")}>
            <View
              className={`px-2 py-1 ${viewMode === "list" ? "bg-accent border border-accent" : "bg-white border border-gray-200"} rounded-r-3xl`}
            >
              <Ionicons
                name="list"
                size={13}
                color={
                  viewMode === "list" ? AppColors.white : AppColors.gray[600]
                }
              />
            </View>
          </Pressable>
        </View>
      </View>
      <View className="h-[0.5px] bg-gray-200 my-2" />
      <FlatList
        key={isGrid ? "grid" : "list"}
        data={savedProperties}
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
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
  },
  listItem: {
    marginBottom: 16,
  },
});
