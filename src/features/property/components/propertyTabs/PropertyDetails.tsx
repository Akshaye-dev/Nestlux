import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropertyDetailsCard from "./PropertyDetailsCard";

const PropertyDetails = () => {
  return (
    <View className="mt-6">
      <Text className="text-base text-black font-plus-jakarta-sans-semi-bold mb-3">
        Property Details
      </Text>
      <PropertyDetailsCard type="Year Built" value="2022" topRounded={true} />
      <PropertyDetailsCard type="Bedrooms" value="3" />
      <PropertyDetailsCard type="Bathrooms" value="2" />
      <PropertyDetailsCard type="Square Footage" value="1,500 sq ft" />
      <PropertyDetailsCard type="Garage" value="2 cars" bottomRounded={true} />
    </View>
  );
};

export default PropertyDetails;

const styles = StyleSheet.create({});
