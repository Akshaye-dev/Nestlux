import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PropertyGallery from "../components/PropertyGallery";
import PropertyHeader from "../components/PropertyHeader";
import PropertyInfo from "../components/PropertyInfo";

const PropertyDetailScreen = () => {
  const { id: propertyId } = useLocalSearchParams();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}

      contentContainerStyle={{ paddingBottom: 60 }}
      className="flex-1 bg-white"
    >
      <View className="flex-1 bg-white ">
        <PropertyGallery />
        <PropertyHeader />
        <PropertyInfo />
      </View>
    </ScrollView>
  );
};

export default PropertyDetailScreen;

const styles = StyleSheet.create({});
