import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AmenitiesCard from "./AmenitiesCard";

const amenitiesData = [
  { id: "1", name: "Swimming Pool" },
  { id: "2", name: "Gym" },
  { id: "3", name: "Garden" },
  { id: "4", name: "Parking" },
  { id: "5", name: "Playground" },
  { id: "6", name: "Security" },
  { id: "7", name: "Elevator" },
];
const Amenities = () => {
  return (
    <View>
      <Text className="text-base font-plus-jakarta-sans-semi-bold text-black mb-2">
        Amenities & Features
      </Text>

      <FlatList
        data={amenitiesData}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: 10,
          justifyContent: "space-between",
        }}

        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <View className="w-[48%]">
              <AmenitiesCard name={item.name} icon="" />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({});
