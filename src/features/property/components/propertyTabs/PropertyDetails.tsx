import { Property } from "@/src/features/home/models/domain/Property";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropertyDetailsCard from "./PropertyDetailsCard";

const PropertyDetails = ({ property }: { property: Property }) => {
  return (
    <View className="mt-6">
      <Text className="text-base text-black font-plus-jakarta-sans-semi-bold mb-3">
        Property Details
      </Text>
      <PropertyDetailsCard
        type="Year Built"
        value={property.yearBuilt.toString()}
        topRounded={true}
      />
      <PropertyDetailsCard
        type="Bedrooms"
        value={property.noOfBedrooms.toString()}
      />
      <PropertyDetailsCard
        type="Bathrooms"
        value={property.noOfBathrooms.toString()}
      />
      <PropertyDetailsCard
        type="Square Footage"
        value={`${property.areaSqFt} sq ft`}
      />
      <PropertyDetailsCard type="Garage" value="2 cars" bottomRounded={true} />
    </View>
  );
};

export default PropertyDetails;

const styles = StyleSheet.create({});
