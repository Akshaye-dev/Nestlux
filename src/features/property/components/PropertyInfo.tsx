import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AgentCard from "./propertyTabs/AgentCard";
import Amenities from "./propertyTabs/Amenities";
import PropertyDetails from "./propertyTabs/PropertyDetails";
import PropertyLocation from "./propertyTabs/PropertyLocation";

const tabs = ["Overview", "Amenities", "Location"];
const PropertyInfo = () => {
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
              This stunning penthouse offers breathtaking views of the city
              skyline and is designed with modern elegance in mind. With
              spacious living areas, high-end finishes, and state-of-the-art
              appliances, this property provides the perfect blend of luxury and
              comfort. Enjoy the convenience of being located in the heart of
              the city, with easy access to shopping, dining, and entertainment
              options.
            </Text>
            <PropertyDetails />
            <AgentCard />
          </View>
        )}
        {activeTab === "Amenities" && <Amenities />}
        {activeTab === "Location" && (
          <View>
            <Text className="text-base font-plus-jakarta-sans-semi-bold text-black mb-2">
              Property Location
            </Text>
            <Text className="text-gray-600 text-sm  font-plus-jakarta-sans">
              123 Main Street, New York, NY 10001
            </Text>
            <PropertyLocation lat={40.712} long={-74.006} />
          </View>
        )}
      </View>
    </View>
  );
};

export default PropertyInfo;

const styles = StyleSheet.create({});
