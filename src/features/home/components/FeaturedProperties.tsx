import { Icons } from "@/src/shared/assets/icons";
import { AppStrings } from "@/src/shared/constants/strings";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { formatPrice } from "../utils/formatPrice";

import { AppColors } from "@/src/shared/constants/colors";
import { useProperties } from "../hooks/useProperties";
import { FeaturedSkeleton } from "./skeleton/FeaturedSkeleton";
type FeaturedPropertiesProps = {
  onPress: (id: string) => void;
};
const FeaturedProperties = ({ onPress }: FeaturedPropertiesProps) => {
  const {
    propertiesData,
    loading,
    loadingMore,
    hasMore,
    loadMore,
    error,
    isFetching,
  } = useProperties({ featured: true, limit: 7 });

  if (loading && propertiesData.length === 0) {
    return <FeaturedSkeleton />;
  }
  return (
    <View className="mt-4 w-full justify-between items-center">
      <View className="flex-row w-full justify-between items-center">
        <Text className="text-lg font-plus-jakarta-sans-semi-bold">
          {AppStrings.home.featuredProperties}
        </Text>

        <Text className="text-sm font-plus-jakarta-sans-semi-bold text-accent ">
          {AppStrings.home.seeAll}
          <Ionicons
            name="chevron-forward"
            size={10}
            color={AppColors.accent}
            style={{ alignSelf: "center", marginLeft: 2 }}
          />
        </Text>
      </View>

      <FlatList
        data={propertiesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-2"
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              onPress(item.id);
            }}
            android_ripple={{
              color: "#D1D5DB",
              foreground: true,
            }}
            className="overflow-hidden rounded-3xl w-72 h-52 mr-4"
          >
            <View>
              <ImageBackground
                source={{ uri: item.imageUrl }}
                className="w-full h-full rounded-3xl  overflow-hidden"
              >
                <View className="flex-row justify-between items-center p-2">
                  <View className="bg-accent rounded-3xl px-2 items-center justify-center">
                    <Text className="text-sm text-white font-plus-jakarta-sans-semi-bold">
                      {AppStrings.home.featured}
                    </Text>
                  </View>

                  <View className="items-center justify-center p-1 ">
                    <View className="w-8 h-8 rounded-full bg-input-background opacity-50 absolute" />
                    <Ionicons
                      name={item.isFavorite ? "heart" : "heart-outline"}
                      size={20}
                      color={item.isFavorite ? "red" : "white"}
                      className="opacity-100"
                    />
                  </View>
                </View>

                <View className="flex-row align-bottom absolute bottom-0 w-full justify-between p-3 ">
                  <View>
                    <Text
                      className="text-lg font-plus-jakarta-sans-semi-bold text-white"
                      style={{ maxWidth: 150 }}
                    >
                      {item.title}
                    </Text>
                    <Text className="text-sm text-gray-200 font-plus-jakarta-sans">
                      {item.location}
                    </Text>
                  </View>
                  <View className="items-end">
                    <Text className="text-lg text-white font-plus-jakarta-sans-semi-bold">
                      {formatPrice(item.price)}
                    </Text>
                    <View className="flex-row items-center">
                      <Image source={Icons.startIcon} className="size-4" />
                      <Text className="text-sm text-gray-200 ml-1 font-plus-jakarta-sans">
                        {item.rating}
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </Pressable>
        )}
        onEndReached={() => {
          if (hasMore && !loadingMore) {
            loadMore();
          }
        }}
        onEndReachedThreshold={0.5} // Trigger loadMore when the user scrolls to 50% of the list
        ListFooterComponent={
          loadingMore ? (
            <View className="flex-row justify-center items-center flex-1 py-4">
              <ActivityIndicator size="small" color={AppColors.accent} />
            </View>
          ) : null
        }
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FeaturedProperties;

const styles = StyleSheet.create({});
