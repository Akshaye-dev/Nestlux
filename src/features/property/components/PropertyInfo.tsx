import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Property } from "../../home/models/domain/Property";
import AgentCard from "./propertyTabs/AgentCard";
import Amenities from "./propertyTabs/Amenities";
import PropertyDetails from "./propertyTabs/PropertyDetails";
import PropertyLocation from "./propertyTabs/PropertyLocation";

const tabs = ["Overview", "Amenities", "Location"];
const PropertyInfo = ({ property }: { property: Property }) => {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <View className="flex-1 px-4 mt-6">
      <View className="flex-row bg-gray-100 p-1 rounded-3xl border border-gray-200">
        {tabs.map((tab) => (
          <Pressable
            key={tab}
            className={`rounded-3xl py-2 items-center justify-center flex-1  ${
              activeTab === tab ? "bg-white" : "text-gray-500"
            }`}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              className={`text-center text-base  font-plus-jakarta-sans-semi-bold ${
                activeTab === tab ? "text-accent" : "text-gray-500"
              }`}
            >
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>
      <View className="mt-4">
        {activeTab === "Overview" && (
          <View>
            <Text className="text-base font-plus-jakarta-sans-semi-bold text-black mb-2">
              Overview
            </Text>
            <Text className="text-gray-600 text-sm font-plus-jakarta-sans">
              {property.overview}
            </Text>
            <PropertyDetails property={property} />
            <AgentCard agent={property.agent[0]} />
          </View>
        )}
        {activeTab === "Amenities" && (
          <Amenities amenities={property.amenities} />
        )}
        {activeTab === "Location" && (
          <View>
            <Text className="text-base font-plus-jakarta-sans-semi-bold text-black mb-2">
              Property Location
            </Text>
            <Text className="text-gray-600 text-sm  font-plus-jakarta-sans">
              {property.city}, {property.state}
            </Text>
            <PropertyLocation
              lat={property.latitude}
              long={property.longitude}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default PropertyInfo;

const styles = StyleSheet.create({});
