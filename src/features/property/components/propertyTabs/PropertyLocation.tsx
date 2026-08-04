import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";

type PropertyLocationProps = {
  lat: number;
  long: number;
};

const PropertyLocation = ({ lat, long }: PropertyLocationProps) => {
  const region: Region = {
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const url = `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;
  const openMapsHandler = () => {
    Linking.openURL(url).catch((err) =>
      console.error("Error opening maps:", err),
    );
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region}>
        <Marker
          coordinate={{ latitude: lat, longitude: long }}
          title="Property Location"
          description="This is the location of the property"
        />
      </MapView>
      <Pressable
        android_ripple={{ color: AppColors.ripple, foreground: true }}
        className="absolute bottom-2 right-2"
        onPress={openMapsHandler}
      >
        <View className="flex-row  rounded-2xl items-center  py-1 px-3 bg-white border border-accent ">
          <Text className="text-accent text-sm font-plus-jakarta-sans ">
            Open in Maps
          </Text>
          <Ionicons name="chevron-forward" size={12} color={AppColors.accent} />
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyLocation;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    width: "100%",
    height: 200,
    borderRadius: 16,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
