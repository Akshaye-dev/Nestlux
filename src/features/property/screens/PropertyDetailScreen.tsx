import { useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Property } from "../../home/models/domain/Property";
import PropertyGallery from "../components/PropertyGallery";
import PropertyHeader from "../components/PropertyHeader";
import PropertyInfo from "../components/PropertyInfo";

const PropertyDetailScreen = () => {
  const { id: propertyId } = useLocalSearchParams();
  const queryClient = useQueryClient();
  const property = queryClient.getQueryData<Property>(["property", propertyId]);

  if (!property) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-500 text-base">
          Property not found in cache
        </Text>
      </View>
    );
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}

      contentContainerStyle={{ paddingBottom: 60 }}
      className="flex-1 bg-white"
    >
      <View className="flex-1 bg-white ">
        <PropertyGallery property={property} />
        <PropertyHeader property={property} />
        <PropertyInfo property={property} />
      </View>
    </ScrollView>
  );
};

export default PropertyDetailScreen;

const styles = StyleSheet.create({});
