import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Carousel, CarouselRef } from "react-native-reanimated-carousel";
const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];
const PropertyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);
  return (
    <View>
      <View>
        <Carousel
          ref={carouselRef}
          style={{
            width: Dimensions.get("window").width,
            height: 250,
          }}
          data={images}
          onSnapToItem={setCurrentIndex}
          renderItem={({ item }) => (
            <Image source={{ uri: item.url }} className="w-full h-full " />
          )}
        />
        <View className="bg-accent absolute rounded-xl px-2 py-1 bottom-2 right-2">
          <Text className="text-xs text-white font-plus-jakarta-sans-semi-bold">
            For Sale
          </Text>
        </View>
      </View>

      <View className="flex-row absolute top-12 px-4 justify-between items-center w-full">
        <View className="bg-gray-600 rounded-full p-2">
          <Ionicons name="chevron-back" size={18} color={AppColors.white} />
        </View>
        <View className="flex-row gap-3 items-center justify-center">
          <View className="bg-gray-600 rounded-full p-2 ">
            <Ionicons name="heart-outline" size={18} color={AppColors.white} />
          </View>
          <View className="bg-gray-600 rounded-full p-2 ">
            <Ionicons
              name="share-social-outline"
              size={18}
              color={AppColors.white}
            />
          </View>
        </View>
      </View>

      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: 4,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8,
        }}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              setCurrentIndex(index);
              carouselRef.current?.scrollTo({ index, animated: true });
            }}
          >
            <Image
              source={{ uri: item.url }}
              className={`w-16 h-12 rounded-2xl mr-2 ${currentIndex === index ? "border-2 border-accent" : "border border-gray-300"}`}
              resizeMode="cover"
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export default PropertyCarousel;

const styles = StyleSheet.create({});
